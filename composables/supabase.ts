import { createClient } from '@supabase/supabase-js'
import type { SupportedStorage } from '@supabase/supabase-js'

function supportsLocalStorage() {
    const session = localStorage.getItem('supabase.auth.token');
  
    if (session) {
      const parsedSession = JSON.parse(session);
      
      // Check if there's a valid access_token
      if (parsedSession.currentSession?.access_token) {
        return true;
      }
    }
    
    return false;
}

const customStorageAdapter: SupportedStorage = {
    getItem: (key) => {
        if (!supportsLocalStorage()) {
            // Configure alternate storage
            return null
        }
        return globalThis.localStorage.getItem(key)
    },
    setItem: (key, value) => {
        if (!supportsLocalStorage()) {
            // Configure alternate storage here
            return
        }
        globalThis.localStorage.setItem(key, value)
    },
    removeItem: (key) => {
        if (!supportsLocalStorage()) {
            // Configure alternate storage here
            return
        }
        globalThis.localStorage.removeItem(key)
    },
}

export default function () {
    const config = useRuntimeConfig()
    return createClient(
        config.public.PROJECTURL, 
        config.public.ANONKEY,
        {
            auth: {
                detectSessionInUrl: true,
                flowType: 'pkce',
                storage: customStorageAdapter,
            }
        }
    )
}
import { createClient } from '@supabase/supabase-js'
export default function () {
    const config = useRuntimeConfig()
    return createClient(config.public.PROJECTURL, config.public.ANONKEY)
}
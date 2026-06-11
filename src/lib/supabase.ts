import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Variáveis do Supabase faltando no arquivo .env. O site pode não carregar dados ao vivo.');
}

// Passamos URLs falsas válidas apenas para evitar o crash (White Screen of Death) do React
export const supabase = createClient(
  supabaseUrl || 'https://xyz.supabase.co', 
  supabaseAnonKey || 'dummy-key'
);

// lib/database.types.ts
// GENERATED from the live Supabase schema (npm run db:types / MCP generate_typescript_types).
// Regenerate after every migration. Consumed by lib/supabase.ts via createClient<Database>.
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      accounts: {
        Row: {
          created_at: string
          email: string
          id: string
          plan: string
          referral_code: string | null
          stripe_customer_id: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id: string
          plan?: string
          referral_code?: string | null
          stripe_customer_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          plan?: string
          referral_code?: string | null
          stripe_customer_id?: string | null
        }
        Relationships: []
      }
      child_profiles: {
        Row: {
          account_id: string
          age_band: string
          created_at: string
          current_level: number
          id: string
          interest_slug: string | null
          name: string
          skin_slug: string
          subject_slug: string
          voice_id: string
        }
        Insert: {
          account_id: string
          age_band: string
          created_at?: string
          current_level?: number
          id?: string
          interest_slug?: string | null
          name?: string
          skin_slug: string
          subject_slug?: string
          voice_id?: string
        }
        Update: {
          account_id?: string
          age_band?: string
          created_at?: string
          current_level?: number
          id?: string
          interest_slug?: string | null
          name?: string
          skin_slug?: string
          subject_slug?: string
          voice_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "child_profiles_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      content_approvals: {
        Row: {
          level_ordinal: number
          notes: string | null
          reviewer_email: string | null
          status: string
          subject_slug: string
          updated_at: string
        }
        Insert: {
          level_ordinal: number
          notes?: string | null
          reviewer_email?: string | null
          status?: string
          subject_slug: string
          updated_at?: string
        }
        Update: {
          level_ordinal?: number
          notes?: string | null
          reviewer_email?: string | null
          status?: string
          subject_slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      cron_runs: {
        Row: {
          delivered: number | null
          id: string
          job: string
          ran_at: string
          scanned: number | null
          skipped: number | null
        }
        Insert: {
          delivered?: number | null
          id?: string
          job?: string
          ran_at?: string
          scanned?: number | null
          skipped?: number | null
        }
        Update: {
          delivered?: number | null
          id?: string
          job?: string
          ran_at?: string
          scanned?: number | null
          skipped?: number | null
        }
        Relationships: []
      }
      processed_webhook_events: {
        Row: {
          event_id: string
          processed_at: string
          type: string | null
        }
        Insert: {
          event_id: string
          processed_at?: string
          type?: string | null
        }
        Update: {
          event_id?: string
          processed_at?: string
          type?: string | null
        }
        Relationships: []
      }
      referrals: {
        Row: {
          created_at: string
          credited_at: string | null
          id: string
          referred_account_id: string
          referred_email: string | null
          referrer_account_id: string
          reward_cents: number
          status: string
        }
        Insert: {
          created_at?: string
          credited_at?: string | null
          id?: string
          referred_account_id: string
          referred_email?: string | null
          referrer_account_id: string
          reward_cents?: number
          status?: string
        }
        Update: {
          created_at?: string
          credited_at?: string | null
          id?: string
          referred_account_id?: string
          referred_email?: string | null
          referrer_account_id?: string
          reward_cents?: number
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "referrals_referred_account_id_fkey"
            columns: ["referred_account_id"]
            isOneToOne: true
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referrals_referrer_account_id_fkey"
            columns: ["referrer_account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      story_instances: {
        Row: {
          audio_key: string | null
          credited_at: string | null
          delivered_at: string
          id: string
          level_ordinal: number
          profile_id: string
          report_reason: string | null
          reported_at: string | null
          script_text: string | null
          skin_slug: string
          subject_slug: string
          voice_id: string
        }
        Insert: {
          audio_key?: string | null
          credited_at?: string | null
          delivered_at?: string
          id?: string
          level_ordinal: number
          profile_id: string
          report_reason?: string | null
          reported_at?: string | null
          script_text?: string | null
          skin_slug: string
          subject_slug: string
          voice_id: string
        }
        Update: {
          audio_key?: string | null
          credited_at?: string | null
          delivered_at?: string
          id?: string
          level_ordinal?: number
          profile_id?: string
          report_reason?: string | null
          reported_at?: string | null
          script_text?: string | null
          skin_slug?: string
          subject_slug?: string
          voice_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "story_instances_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      waitlist: {
        Row: {
          created_at: string
          email: string
          id: string
          lang: string
          source: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          lang?: string
          source?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          lang?: string
          source?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

// lib/voices.ts
// Kokoro-82M voice IDs per language.
// Full voice list: https://huggingface.co/hexgrad/Kokoro-82M/blob/main/VOICES.md
//
// Each language has a set of curated voices mapped to our 4 personality slots
// (warm/soft, calm/low, bright/playful, gentle-storyteller) so the UI
// voice-picker works consistently across languages.
//
// VERIFY these IDs against the DeepInfra endpoint before launch —
// Kokoro adds new voices regularly.

import type { Lang } from '@/lib/i18n'

export interface VoiceConfig {
  id:   string
  name: string   // display name in the UI
  tone: string   // 'warm & soft' etc.
}

// 4 curated voices per language matching our UI personality slots
export const VOICES_BY_LANG: Record<string, [VoiceConfig, VoiceConfig, VoiceConfig, VoiceConfig]> = {
  en: [
    { id: 'af_heart',  name: 'Willow',   tone: 'warm & soft' },
    { id: 'af_nicole', name: 'Sage',     tone: 'hushed & dreamy' },
    { id: 'am_michael', name: 'River',   tone: 'calm & deep' },
    { id: 'bf_emma',   name: 'Juniper',  tone: 'gentle storyteller' },
  ],
  es: [
    { id: 'ef_dalia',  name: 'Sofía',    tone: 'cálida y suave' },
    { id: 'ef_dalia',  name: 'Carmen',   tone: 'calmada' },
    { id: 'em_alex',   name: 'Pablo',    tone: 'alegre y juguetón' },
    { id: 'ef_dalia',  name: 'Lucía',    tone: 'narradora gentil' },
  ],
  fr: [
    { id: 'ff_siwis',  name: 'Margot',   tone: 'chaleureuse et douce' },
    { id: 'ff_siwis',  name: 'Claire',   tone: 'calme' },
    { id: 'ff_siwis',  name: 'Émile',    tone: 'joyeux et joueur' },
    { id: 'ff_siwis',  name: 'Simone',   tone: 'conteuse douce' },
  ],
  pt: [
    { id: 'pf_dora',   name: 'Beatriz',  tone: 'calorosa e suave' },
    { id: 'pf_dora',   name: 'Inês',     tone: 'calma' },
    { id: 'pm_alex',   name: 'Miguel',   tone: 'alegre e brincalhão' },
    { id: 'pf_dora',   name: 'Mafalda',  tone: 'narradora gentil' },
  ],
  de: [
    { id: 'df_hedda',  name: 'Lena',     tone: 'warm und sanft' },
    { id: 'df_hedda',  name: 'Mia',      tone: 'ruhig' },
    { id: 'dm_fenrir', name: 'Felix',    tone: 'fröhlich und verspielt' },
    { id: 'df_hedda',  name: 'Anna',     tone: 'sanfte Erzählerin' },
  ],
  ja: [
    { id: 'jf_alpha',  name: 'さくら',    tone: '温かく柔らか' },
    { id: 'jf_alpha',  name: 'みどり',    tone: '穏やか' },
    { id: 'jm_kumo',   name: 'ひかる',    tone: '明るく遊び心' },
    { id: 'jf_alpha',  name: 'ゆき',      tone: 'やさしい語り手' },
  ],
  zh: [
    { id: 'zf_xiaobei', name: '小贝',     tone: '温暖柔和' },
    { id: 'zf_xiaobei', name: '晓晓',     tone: '平静低沉' },
    { id: 'zm_yunjian',  name: '云健',    tone: '明亮活泼' },
    { id: 'zf_xiaobei', name: '温柔',     tone: '温柔讲述者' },
  ],
  ko: [
    { id: 'kf_dawit',  name: '다윗',      tone: '따뜻하고 부드러운' },
    { id: 'kf_dawit',  name: '하늘',      tone: '차분한' },
    { id: 'km_inko',   name: '인코',      tone: '밝고 활기찬' },
    { id: 'kf_dawit',  name: '은혜',      tone: '부드러운 이야기꾼' },
  ],
  hi: [
    { id: 'hf_alpha',  name: 'प्रिया',    tone: 'गर्म और मृदु' },
    { id: 'hf_alpha',  name: 'अनन्या',    tone: 'शांत' },
    { id: 'hm_omega',  name: 'आर्यन',     tone: 'उज्जवल और चंचल' },
    { id: 'hf_alpha',  name: 'अदिति',     tone: 'सौम्य कहानीकार' },
  ],
  it: [
    { id: 'if_sara',   name: 'Giulia',    tone: 'calda e morbida' },
    { id: 'if_sara',   name: 'Chiara',    tone: 'calma' },
    { id: 'im_nicola', name: 'Marco',     tone: 'allegro e giocoso' },
    { id: 'if_sara',   name: 'Sofia',     tone: 'narratrice gentile' },
  ],
}

// Default to English voices if language not supported
export function getVoicesForLang(lang: string) {
  return VOICES_BY_LANG[lang] ?? VOICES_BY_LANG['en']!
}

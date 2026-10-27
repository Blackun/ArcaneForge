/**
 * World Map Zone Scene & Character Portrait SVG Renderer
 * Renders dynamic multi-stage restoration scenes (viewBox="0 0 320 180")
 * and character portraits (viewBox="0 0 80 80") for Arcane Forge: Merge & Restore.
 */

export function renderZoneSceneSvg(
  zoneId: string,
  completedSteps: number,
  maxSteps: number
): string {
  const stage = Math.max(0, Math.min(completedSteps, maxSteps));

  switch (zoneId) {
    case 'zone_forge':
      return renderForgeScene(stage);
    case 'zone_alchemy':
      return renderAlchemyScene(stage);
    case 'zone_altar':
      return renderAltarScene(stage);
    case 'zone_library':
      return renderLibraryScene(stage);
    case 'zone_sanctum':
      return renderSanctumScene(stage);
    default:
      return renderForgeScene(stage);
  }
}

function renderCobwebsAndCracks(stage: number): string {
  if (stage >= 2) return '';
  const opacity = stage === 0 ? '0.65' : '0.28';
  return `
    <g opacity="${opacity}" stroke="#64748b" stroke-width="1" fill="none">
      <!-- Top-left cobweb -->
      <path d="M0,0 L48,0 M0,0 L42,26 M0,0 L24,44 M0,0 L0,50"/>
      <path d="M16,0 Q14,12 0,16 M30,0 Q26,20 0,32 M42,0 Q34,28 0,46"/>
      <!-- Top-right cobweb -->
      <path d="M320,0 L275,0 M320,0 L282,28 M320,0 L298,44"/>
      <path d="M300,0 Q302,14 320,18 M286,0 Q290,22 320,34"/>
      <!-- Floor cracks & rubble -->
      <path d="M40,155 L58,148 L70,156 L84,151" stroke="#334155" stroke-width="1.5"/>
      <path d="M235,158 L250,149 L268,154" stroke="#334155" stroke-width="1.5"/>
      ${
        stage === 0
          ? `<polygon points="32,162 46,149 58,162" fill="#334155" stroke="none"/>
             <polygon points="255,164 268,150 282,164" fill="#334155" stroke="none"/>
             <circle cx="63" cy="160" r="4" fill="#475569" stroke="none"/>`
          : ''
      }
    </g>
  `;
}

function renderMasterworkAura(color1: string, color2: string): string {
  return `
    <g class="scene-master-aura">
      <circle cx="160" cy="90" r="76" fill="none" stroke="${color1}" stroke-width="1.2" stroke-dasharray="6 4" opacity="0.55">
        <animateTransform attributeName="transform" type="rotate" from="0 160 90" to="360 160 90" dur="18s" repeatCount="indefinite"/>
      </circle>
      <circle cx="160" cy="90" r="64" fill="none" stroke="${color2}" stroke-width="1" stroke-dasharray="3 6" opacity="0.45">
        <animateTransform attributeName="transform" type="rotate" from="360 160 90" to="0 160 90" dur="12s" repeatCount="indefinite"/>
      </circle>
      <!-- Floating sparkles -->
      <circle cx="70" cy="45" r="2" fill="#fde68a">
        <animate attributeName="opacity" values="0.2;1;0.2" dur="2.4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="252" cy="40" r="2.2" fill="#fde68a">
        <animate attributeName="opacity" values="1;0.2;1" dur="2.8s" repeatCount="indefinite"/>
      </circle>
      <circle cx="110" cy="28" r="1.6" fill="${color1}">
        <animate attributeName="opacity" values="0.3;0.95;0.3" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="215" cy="26" r="1.8" fill="${color2}">
        <animate attributeName="opacity" values="0.9;0.2;0.9" dur="2.2s" repeatCount="indefinite"/>
      </circle>
    </g>
  `;
}

/**
 * 1. 드워프 화로 대장간 (zone_forge)
 */
function renderForgeScene(stage: number): string {
  const bgTop = stage === 0 ? '#11131a' : stage === 1 ? '#1c1417' : stage === 2 ? '#291513' : '#3b170e';
  const bgBottom = stage === 0 ? '#1e2230' : stage === 1 ? '#2d1e22' : stage === 2 ? '#451f16' : '#5c2310';
  const furnaceGlow = stage === 0 ? '#1e293b' : stage === 1 ? '#ea580c' : stage === 2 ? '#f97316' : '#facc15';

  return `
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" class="zone-scene-svg stage-${stage}">
      <defs>
        <linearGradient id="forgeBg_${stage}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${bgTop}"/>
          <stop offset="100%" stop-color="${bgBottom}"/>
        </linearGradient>
        <radialGradient id="forgeFire_${stage}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fef08a" stop-opacity="${stage > 0 ? 0.95 : 0}"/>
          <stop offset="50%" stop-color="${furnaceGlow}" stop-opacity="${stage > 0 ? 0.75 : 0.1}"/>
          <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <!-- Background & Stone Wall -->
      <rect width="320" height="180" fill="url(#forgeBg_${stage})"/>
      <rect x="0" y="142" width="320" height="38" fill="#181824"/>
      <line x1="0" y1="142" x2="320" y2="142" stroke="${stage === 3 ? '#f59e0b' : '#334155'}" stroke-width="2"/>

      <!-- Ambient Fire Glow -->
      ${stage > 0 ? `<circle cx="160" cy="95" r="${55 + stage * 22}" fill="url(#forgeFire_${stage})"/>` : ''}
      ${stage === 3 ? renderMasterworkAura('#f59e0b', '#fbbf24') : ''}

      <!-- Left Weapon Rack -->
      <g transform="translate(26, 68)">
        <rect x="0" y="0" width="44" height="74" rx="3" fill="#27273a" stroke="#475569" stroke-width="1.5"/>
        <line x1="4" y1="24" x2="40" y2="24" stroke="#64748b" stroke-width="2"/>
        <line x1="4" y1="50" x2="40" y2="50" stroke="#64748b" stroke-width="2"/>
        ${
          stage >= 2
            ? `<path d="M14,8 L14,64 M10,18 L18,18" stroke="#e2e8f0" stroke-width="2.5" stroke-linecap="round"/>
               <path d="M30,10 L30,64 M25,20 L35,20" stroke="${stage === 3 ? '#facc15' : '#94a3b8'}" stroke-width="2.5" stroke-linecap="round"/>`
            : `<path d="M16,38 L22,66" stroke="#64748b" stroke-width="2"/>`
        }
      </g>

      <!-- Right Bellows / Lava Pipe -->
      <g transform="translate(242, 62)">
        <rect x="14" y="0" width="22" height="80" fill="#27273a" stroke="#475569" stroke-width="1.5"/>
        ${
          stage >= 2
            ? `<rect x="20" y="6" width="10" height="68" fill="${stage === 3 ? '#facc15' : '#f97316'}" opacity="0.85">
                 <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite"/>
               </rect>`
            : ''
        }
      </g>

      <!-- Center Dwarven Stone Furnace -->
      <g transform="translate(105, 22)">
        <!-- Chimney & Arch -->
        <path d="M18,120 L26,10 L84,10 L92,120 Z" fill="#262936" stroke="${stage === 3 ? '#f59e0b' : '#475569'}" stroke-width="2"/>
        <!-- Dwarven Runes on Furnace Arch -->
        ${
          stage >= 2
            ? `<text x="55" y="34" text-anchor="middle" fill="${stage === 3 ? '#fef08a' : '#fb923c'}" font-size="11" font-family="serif" letter-spacing="3">ᚦ ᚱ ᚷ</text>`
            : `<path d="M38,18 L52,38 L46,52" stroke="#0f172a" stroke-width="2" fill="none"/>`
        }
        <!-- Furnace Hearth Opening -->
        <path d="M32,120 L32,68 A23,23 0 0,1 78,68 L78,120 Z" fill="#0f131d" stroke="${stage >= 1 ? '#ea580c' : '#334155'}" stroke-width="2"/>

        <!-- Fire inside Hearth -->
        ${
          stage === 0
            ? `<ellipse cx="55" cy="112" rx="16" ry="5" fill="#334155"/>`
            : `<g>
                 <path d="M36,118 Q44,75 55,68 Q66,75 74,118 Z" fill="#ea580c" opacity="0.9">
                   <animate attributeName="d" values="M36,118 Q44,75 55,68 Q66,75 74,118 Z;M36,118 Q48,62 55,58 Q62,62 74,118 Z;M36,118 Q44,75 55,68 Q66,75 74,118 Z" dur="1.4s" repeatCount="indefinite"/>
                 </path>
                 <path d="M43,118 Q50,86 55,78 Q60,86 67,118 Z" fill="#facc15">
                   <animate attributeName=" opacity" values="0.75;1;0.75" dur="0.9s" repeatCount="indefinite"/>
                 </path>
               </g>`
        }
      </g>

      <!-- Foreground Anvil -->
      <g transform="translate(128, 122)">
        ${
          stage === 0
            ? `<!-- Tilted broken anvil -->
               <g transform="rotate(14 32 20)">
                 <path d="M12,26 L52,26 L46,14 L18,14 Z" fill="#475569"/>
                 <path d="M6,6 L42,6 L40,14 L12,14 Z" fill="#64748b"/>
               </g>`
            : `<!-- Restored Anvil -->
               <path d="M12,30 L52,30 L46,16 L18,16 Z" fill="#334155" stroke="#64748b" stroke-width="1"/>
               <path d="M2,6 L58,6 L50,16 L14,16 Z" fill="${stage === 3 ? '#e2e8f0' : '#94a3b8'}" stroke="${stage === 3 ? '#f59e0b' : '#cbd5e1'}" stroke-width="1.5"/>
               ${
                 stage === 3
                   ? `<!-- Glowing Masterwork Sword on Anvil -->
                      <line x1="12" y1="3" x2="52" y2="3" stroke="#fef08a" stroke-width="3" stroke-linecap="round">
                        <animate attributeName="opacity" values="0.7;1;0.7" dur="1.2s" repeatCount="indefinite"/>
                      </line>`
                   : ''
               }`
        }
      </g>

      ${renderCobwebsAndCracks(stage)}
    </svg>
  `;
}

/**
 * 2. 연금술 증류 탑 (zone_alchemy)
 */
function renderAlchemyScene(stage: number): string {
  const bgTop = stage === 0 ? '#0f161e' : stage === 1 ? '#0e2229' : stage === 2 ? '#0c2e36' : '#09383e';
  const bgBottom = stage === 0 ? '#18212d' : stage === 1 ? '#16333b' : stage === 2 ? '#13484c' : '#115e59';
  const liquidColor = stage === 0 ? '#334155' : stage === 1 ? '#10b981' : stage === 2 ? '#06b6d4' : '#34d399';

  return `
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" class="zone-scene-svg stage-${stage}">
      <defs>
        <linearGradient id="alchBg_${stage}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${bgTop}"/>
          <stop offset="100%" stop-color="${bgBottom}"/>
        </linearGradient>
        <radialGradient id="alchGlow_${stage}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${liquidColor}" stop-opacity="${stage > 0 ? 0.55 : 0}"/>
          <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <rect width="320" height="180" fill="url(#alchBg_${stage})"/>
      <rect x="0" y="142" width="320" height="38" fill="#131c26"/>
      <line x1="0" y1="142" x2="320" y2="142" stroke="${stage === 3 ? '#34d399' : '#334155'}" stroke-width="2"/>

      ${stage > 0 ? `<circle cx="160" cy="92" r="${60 + stage * 20}" fill="url(#alchGlow_${stage})"/>` : ''}
      ${stage === 3 ? renderMasterworkAura('#34d399', '#a855f7') : ''}

      <!-- Left Herb & Potion Shelf -->
      <g transform="translate(22, 42)">
        <rect x="0" y="0" width="54" height="100" rx="3" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
        <line x1="4" y1="32" x2="50" y2="32" stroke="#475569" stroke-width="2"/>
        <line x1="4" y1="66" x2="50" y2="66" stroke="#475569" stroke-width="2"/>
        ${
          stage >= 1
            ? `<circle cx="18" cy="22" r="7" fill="#ec4899" opacity="0.85"/>
               <circle cx="36" cy="22" r="7" fill="#38bdf8" opacity="0.85"/>`
            : ''
        }
        ${
          stage >= 2
            ? `<rect x="12" y="46" width="12" height="18" rx="3" fill="#a855f7"/>
               <rect x="30" y="44" width="12" height="20" rx="3" fill="#10b981"/>`
            : ''
        }
      </g>

      <!-- Connecting Copper & Glass Tubes -->
      ${
        stage >= 2
          ? `<path d="M160,42 C195,42 200,82 232,82" fill="none" stroke="${stage === 3 ? '#fbbf24' : '#d97706'}" stroke-width="4"/>
             <path d="M160,42 C195,42 200,82 232,82" fill="none" stroke="#6ee7b7" stroke-width="1.5" stroke-dasharray="4 4">
               <animate attributeName="stroke-dashoffset" from="16" to="0" dur="1s" repeatCount="indefinite"/>
             </path>`
          : ''
      }

      <!-- Center Grand Alchemical Alembic & Cauldron -->
      <g transform="translate(115, 28)">
        <!-- Brass Stand -->
        <line x1="20" y1="114" x2="32" y2="76" stroke="#b45309" stroke-width="3"/>
        <line x1="70" y1="114" x2="58" y2="76" stroke="#b45309" stroke-width="3"/>
        <ellipse cx="45" cy="76" rx="24" ry="6" fill="none" stroke="#d97706" stroke-width="2.5"/>

        <!-- Glass Flask Body -->
        <circle cx="45" cy="60" r="28" fill="#0f172a" stroke="${stage === 3 ? '#fde68a' : '#94a3b8'}" stroke-width="2"/>
        <rect x="38" y="14" width="14" height="22" fill="#0f172a" stroke="${stage === 3 ? '#fde68a' : '#94a3b8'}" stroke-width="2"/>

        ${
          stage === 0
            ? `<!-- Cracked empty flask -->
               <path d="M30,48 L46,60 L38,74 L56,80" stroke="#64748b" stroke-width="1.5" fill="none"/>`
            : `<!-- Bubbling Emerald/Elixir Liquid -->
               <path d="M20,65 Q45,57 70,65 A26,26 0 0,1 20,65 Z" fill="${liquidColor}" opacity="0.9">
                 <animate attributeName="d" values="M20,65 Q35,59 45,65 Q55,71 70,65 A26,26 0 0,1 20,65 Z;M20,65 Q35,71 45,65 Q55,59 70,65 A26,26 0 0,1 20,65 Z;M20,65 Q35,59 45,65 Q55,71 70,65 A26,26 0 0,1 20,65 Z" dur="2.2s" repeatCount="indefinite"/>
               </path>
               <circle cx="38" cy="70" r="3" fill="#a7f3d0">
                 <animate attributeName="cy" values="74;52" dur="1.5s" repeatCount="indefinite"/>
                 <animate attributeName="opacity" values="0.9;0" dur="1.5s" repeatCount="indefinite"/>
               </circle>
               <circle cx="52" cy="74" r="2.5" fill="#a7f3d0">
                 <animate attributeName="cy" values="76;50" dur="1.9s" repeatCount="indefinite"/>
                 <animate attributeName="opacity" values="0.9;0" dur="1.9s" repeatCount="indefinite"/>
               </circle>
               <!-- Burner flame under flask -->
               <path d="M38,108 Q45,90 52,108 Z" fill="#38bdf8">
                 <animate attributeName="opacity" values="0.6;1;0.6" dur="0.8s" repeatCount="indefinite"/>
               </path>`
        }
      </g>

      <!-- Right Condensation Receiver Spire -->
      <g transform="translate(222, 68)">
        <rect x="8" y="54" width="36" height="20" rx="2" fill="#334155" stroke="#64748b"/>
        <ellipse cx="26" cy="34" rx="18" ry="22" fill="#0f172a" stroke="${stage >= 2 ? '#38bdf8' : '#475569'}" stroke-width="2"/>
        ${
          stage >= 2
            ? `<ellipse cx="26" cy="40" rx="14" ry="12" fill="${stage === 3 ? '#c084fc' : '#06b6d4'}" opacity="0.85"/>`
            : ''
        }
      </g>

      ${renderCobwebsAndCracks(stage)}
    </svg>
  `;
}

/**
 * 3. 마법 부여 제단 (zone_altar)
 */
function renderAltarScene(stage: number): string {
  const bgTop = stage === 0 ? '#13111c' : stage === 1 ? '#1e1633' : stage === 2 ? '#2b194d' : '#3b1d6e';
  const bgBottom = stage === 0 ? '#1c1926' : stage === 1 ? '#2a1f47' : stage === 2 ? '#3f2269' : '#581c87';
  const runeColor = stage === 0 ? '#475569' : stage === 1 ? '#818cf8' : stage === 2 ? '#c084fc' : '#f472b6';

  return `
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" class="zone-scene-svg stage-${stage}">
      <defs>
        <linearGradient id="altarBg_${stage}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${bgTop}"/>
          <stop offset="100%" stop-color="${bgBottom}"/>
        </linearGradient>
        <radialGradient id="altarGlow_${stage}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${runeColor}" stop-opacity="${stage > 0 ? 0.65 : 0}"/>
          <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <rect width="320" height="180" fill="url(#altarBg_${stage})"/>
      <rect x="0" y="142" width="320" height="38" fill="#161224"/>
      <line x1="0" y1="142" x2="320" y2="142" stroke="${stage === 3 ? '#e879f9' : '#334155'}" stroke-width="2"/>

      ${stage > 0 ? `<circle cx="160" cy="86" r="${62 + stage * 22}" fill="url(#altarGlow_${stage})"/>` : ''}
      ${stage === 3 ? renderMasterworkAura('#e879f9', '#38bdf8') : ''}

      <!-- Left & Right Rune Obelisks -->
      <g transform="translate(42, 48)">
        <polygon points="16,0 30,18 30,94 2,94 2,18" fill="#262138" stroke="${stage >= 1 ? runeColor : '#475569'}" stroke-width="1.5"/>
        ${
          stage >= 1
            ? `<text x="16" y="56" text-anchor="middle" fill="${runeColor}" font-size="14">ᛟ</text>`
            : ''
        }
      </g>
      <g transform="translate(246, 48)">
        <polygon points="16,0 30,18 30,94 2,94 2,18" fill="#262138" stroke="${stage >= 2 ? runeColor : '#475569'}" stroke-width="1.5"/>
        ${
          stage >= 2
            ? `<text x="16" y="56" text-anchor="middle" fill="${runeColor}" font-size="14">ᛉ</text>`
            : ''
        }
      </g>

      <!-- Center Stepped Pedestal -->
      <g transform="translate(106, 114)">
        <rect x="0" y="18" width="108" height="10" rx="2" fill="#2e2640" stroke="#64748b"/>
        <rect x="14" y="8" width="80" height="10" rx="2" fill="#3b3154" stroke="#64748b"/>
        <rect x="28" y="0" width="52" height="8" rx="2" fill="#4c3d6e" stroke="${stage >= 1 ? runeColor : '#64748b'}"/>
      </g>

      <!-- Floating Crystal & Arcane Magic Circle -->
      ${
        stage === 0
          ? `<!-- Shattered crystal shards on altar -->
             <polygon points="145,114 156,98 165,114" fill="#475569"/>
             <polygon points="164,114 174,102 180,114" fill="#64748b"/>`
          : `<g>
               <!-- Magic Circle behind crystal -->
               <circle cx="160" cy="70" r="34" fill="none" stroke="${runeColor}" stroke-width="1.5" stroke-dasharray="5 3" opacity="0.8">
                 <animateTransform attributeName="transform" type="rotate" from="0 160 70" to="360 160 70" dur="10s" repeatCount="indefinite"/>
               </circle>
               <!-- Levitating Mana Crystal -->
               <g>
                 <animateTransform attributeName="transform" type="translate" values="0,-4;0,4;0,-4" dur="2.6s" repeatCount="indefinite"/>
                 <polygon points="160,34 178,68 160,102 142,68" fill="${stage === 3 ? '#f0abfc' : '#a855f7'}" stroke="#ffffff" stroke-width="1.5"/>
                 <polygon points="160,34 178,68 160,74" fill="#e879f9" opacity="0.65"/>
               </g>
               ${
                 stage >= 2
                   ? `<!-- Energy Beams from Obelisks to Crystal -->
                      <line x1="58" y1="68" x2="142" y2="68" stroke="${runeColor}" stroke-width="2" stroke-dasharray="4 4" opacity="0.75">
                        <animate attributeName="stroke-dashoffset" from="16" to="0" dur="0.9s" repeatCount="indefinite"/>
                      </line>
                      <line x1="262" y1="68" x2="178" y2="68" stroke="${runeColor}" stroke-width="2" stroke-dasharray="4 4" opacity="0.75">
                        <animate attributeName="stroke-dashoffset" from="0" to="16" dur="0.9s" repeatCount="indefinite"/>
                      </line>`
                   : ''
               }
             </g>`
      }

      ${renderCobwebsAndCracks(stage)}
    </svg>
  `;
}

/**
 * 4. 고대 비전 서고 (zone_library)
 */
function renderLibraryScene(stage: number): string {
  const bgTop = stage === 0 ? '#111520' : stage === 1 ? '#141d30' : stage === 2 ? '#172542' : '#1e2952';
  const bgBottom = stage === 0 ? '#1b2030' : stage === 1 ? '#1e2b45' : stage === 2 ? '#233863' : '#2e4482';
  const goldAccent = stage === 0 ? '#475569' : stage === 1 ? '#ca8a04' : stage === 2 ? '#eab308' : '#fef08a';

  return `
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" class="zone-scene-svg stage-${stage}">
      <defs>
        <linearGradient id="libBg_${stage}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${bgTop}"/>
          <stop offset="100%" stop-color="${bgBottom}"/>
        </linearGradient>
      </defs>

      <rect width="320" height="180" fill="url(#libBg_${stage})"/>
      <rect x="0" y="142" width="320" height="38" fill="#141824"/>
      <line x1="0" y1="142" x2="320" y2="142" stroke="${stage === 3 ? '#facc15' : '#334155'}" stroke-width="2"/>

      ${stage === 3 ? renderMasterworkAura('#facc15', '#60a5fa') : ''}

      <!-- Left & Right Tall Arched Bookshelves -->
      <g transform="translate(20, 26)">
        <rect x="0" y="0" width="68" height="116" rx="4" fill="#1e1b2e" stroke="${goldAccent}" stroke-width="1.5"/>
        <line x1="4" y1="38" x2="64" y2="38" stroke="#475569" stroke-width="2"/>
        <line x1="4" y1="76" x2="64" y2="76" stroke="#475569" stroke-width="2"/>
        ${
          stage >= 1
            ? `<!-- Row of ancient tomes -->
               <rect x="10" y="16" width="8" height="20" fill="#ef4444"/>
               <rect x="20" y="14" width="9" height="22" fill="#3b82f6"/>
               <rect x="31" y="17" width="8" height="19" fill="#10b981"/>
               <rect x="42" y="15" width="10" height="21" fill="#a855f7"/>
               <rect x="12" y="54" width="9" height="20" fill="#f59e0b"/>
               <rect x="23" y="52" width="10" height="22" fill="#ec4899"/>
               <rect x="35" y="55" width="9" height="19" fill="#06b6d4"/>`
            : `<rect x="14" y="28" width="16" height="8" transform="rotate(-20 14 28)" fill="#475569"/>`
        }
      </g>

      <g transform="translate(232, 26)">
        <rect x="0" y="0" width="68" height="116" rx="4" fill="#1e1b2e" stroke="${goldAccent}" stroke-width="1.5"/>
        <line x1="4" y1="38" x2="64" y2="38" stroke="#475569" stroke-width="2"/>
        <line x1="4" y1="76" x2="64" y2="76" stroke="#475569" stroke-width="2"/>
        ${
          stage >= 2
            ? `<rect x="12" y="15" width="9" height="21" fill="#8b5cf6"/>
               <rect x="23" y="14" width="8" height="22" fill="#eab308"/>
               <rect x="33" y="16" width="10" height="20" fill="#14b8a6"/>
               <rect x="14" y="53" width="10" height="21" fill="#f97316"/>
               <rect x="26" y="54" width="9" height="20" fill="#6366f1"/>
               <rect x="38" y="52" width="10" height="22" fill="#ec4899"/>`
            : ''
        }
      </g>

      <!-- Center Celestial Armillary Sphere & Lectern -->
      <g transform="translate(160, 82)">
        <!-- Brass Rings of Armillary Sphere -->
        <circle cx="0" cy="-10" r="32" fill="none" stroke="${goldAccent}" stroke-width="2"/>
        <ellipse cx="0" cy="-10" rx="32" ry="12" fill="none" stroke="${goldAccent}" stroke-width="1.5" transform="rotate(28 0 -10)"/>
        <ellipse cx="0" cy="-10" rx="32" ry="12" fill="none" stroke="${goldAccent}" stroke-width="1.5" transform="rotate(-28 0 -10)"/>
        <circle cx="0" cy="-10" r="8" fill="${stage >= 2 ? '#38bdf8' : '#475569'}">
          ${stage >= 2 ? `<animate attributeName="r" values="7;10;7" dur="2s" repeatCount="indefinite"/>` : ''}
        </circle>

        <!-- Lectern Stand -->
        <path d="M-16,60 L-6,24 L6,24 L16,60 Z" fill="#334155" stroke="${goldAccent}" stroke-width="1.5"/>

        <!-- Floating Open Grimoire on Lectern -->
        ${
          stage >= 1
            ? `<g transform="translate(0, 14)">
                 <animateTransform attributeName="transform" type="translate" values="0,12;0,16;0,12" dur="2.4s" repeatCount="indefinite"/>
                 <path d="M-22,0 Q-11,-6 0,0 Q11,-6 22,0 L22,12 Q11,6 0,12 Q-11,6 -22,12 Z" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
                 <line x1="0" y1="0" x2="0" y2="12" stroke="#b45309" stroke-width="1.5"/>
               </g>`
            : ''
        }
      </g>

      ${renderCobwebsAndCracks(stage)}
    </svg>
  `;
}

/**
 * 5. 천공의 에테르 성소 (zone_sanctum)
 */
function renderSanctumScene(stage: number): string {
  const bgTop = stage === 0 ? '#0c101d' : stage === 1 ? '#131c38' : stage === 2 ? '#1d2856' : '#261c69';
  const bgBottom = stage === 0 ? '#161d2f' : stage === 1 ? '#1e2c54' : stage === 2 ? '#312e81' : '#4c1d95';
  const aetherColor = stage === 0 ? '#475569' : stage === 1 ? '#38bdf8' : stage === 2 ? '#818cf8' : '#fde047';

  return `
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" class="zone-scene-svg stage-${stage}">
      <defs>
        <linearGradient id="sancBg_${stage}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${bgTop}"/>
          <stop offset="100%" stop-color="${bgBottom}"/>
        </linearGradient>
        <radialGradient id="sancCore_${stage}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="${stage > 0 ? 0.95 : 0.1}"/>
          <stop offset="45%" stop-color="${aetherColor}" stop-opacity="${stage > 0 ? 0.7 : 0}"/>
          <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <rect width="320" height="180" fill="url(#sancBg_${stage})"/>

      <!-- Starfield background -->
      <circle cx="45" cy="30" r="1.2" fill="#e2e8f0" opacity="0.7"/>
      <circle cx="95" cy="22" r="1.5" fill="#e2e8f0" opacity="0.5"/>
      <circle cx="230" cy="25" r="1.4" fill="#e2e8f0" opacity="0.8"/>
      <circle cx="280" cy="42" r="1.2" fill="#e2e8f0" opacity="0.6"/>

      <rect x="0" y="142" width="320" height="38" fill="#0f172a"/>
      <line x1="0" y1="142" x2="320" y2="142" stroke="${stage === 3 ? '#fde047' : '#334155'}" stroke-width="2"/>

      <!-- Sanctum Core Radiance -->
      <circle cx="160" cy="82" r="${52 + stage * 28}" fill="url(#sancCore_${stage})"/>
      ${stage === 3 ? renderMasterworkAura('#fde047', '#38bdf8') : ''}

      <!-- Left & Right Celestial Pillars -->
      <g transform="translate(34, 32)">
        <rect x="0" y="0" width="22" height="110" fill="#1e293b" stroke="${aetherColor}" stroke-width="1.5"/>
        <rect x="-4" y="0" width="30" height="8" fill="#334155"/>
        <rect x="-4" y="102" width="30" height="8" fill="#334155"/>
      </g>
      <g transform="translate(264, 32)">
        <rect x="0" y="0" width="22" height="110" fill="#1e293b" stroke="${aetherColor}" stroke-width="1.5"/>
        <rect x="-4" y="0" width="30" height="8" fill="#334155"/>
        <rect x="-4" y="102" width="30" height="8" fill="#334155"/>
      </g>

      <!-- Center Astral Heart Engine -->
      <g transform="translate(160, 82)">
        ${
          stage === 0
            ? `<!-- Dormant broken rings -->
               <circle cx="0" cy="0" r="36" fill="none" stroke="#334155" stroke-width="3" stroke-dasharray="28 14"/>
               <circle cx="0" cy="0" r="14" fill="#1e293b" stroke="#475569" stroke-width="2"/>`
            : `<g>
                 <!-- Outer Gyro Ring -->
                 <circle cx="0" cy="0" r="46" fill="none" stroke="${aetherColor}" stroke-width="2.5" stroke-dasharray="22 8">
                   <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="14s" repeatCount="indefinite"/>
                 </circle>
                 <!-- Inner Gyro Ring -->
                 <circle cx="0" cy="0" r="32" fill="none" stroke="#c084fc" stroke-width="2" stroke-dasharray="14 6">
                   <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="9s" repeatCount="indefinite"/>
                 </circle>
                 <!-- Pulsing Aether Star Core -->
                 <polygon points="0,-22 6,-6 22,0 6,6 0,22 -6,6 -22,0 -6,-6" fill="#ffffff">
                   <animateTransform attributeName="transform" type="scale" values="0.9;1.15;0.9" dur="1.8s" repeatCount="indefinite"/>
                 </polygon>
                 <circle cx="0" cy="0" r="10" fill="${aetherColor}"/>
               </g>`
        }
      </g>

      ${renderCobwebsAndCracks(stage)}
    </svg>
  `;
}

/**
 * Renders 80x80 SVG portrait for dialogue modal speakers:
 * - 'lia' | 'alchemist': Apprentice Alchemist Lia (리아)
 * - 'torg' | 'blacksmith': Dwarf Blacksmith Torg (토르그)
 * - 'narrator': Archmage Eldritch's Hologram & Arcane Grimoire Crest (대현자 엘드리치의 기록/내레이션)
 */
export function renderPortraitSvg(
  role: 'lia' | 'torg' | 'narrator' | 'alchemist' | 'blacksmith'
): string {
  if (role === 'lia' || role === 'alchemist') {
    return `
      <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" class="portrait-svg portrait-alchemist">
        <defs>
          <linearGradient id="liaBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#2e1065"/>
            <stop offset="100%" stop-color="#0f172a"/>
          </linearGradient>
        </defs>
        <circle cx="40" cy="40" r="38" fill="url(#liaBg)" stroke="#a855f7" stroke-width="2.5"/>
        <!-- Cloak / Shoulders -->
        <path d="M14,72 Q40,56 66,72" fill="#4c1d95" stroke="#c084fc" stroke-width="1.5"/>
        <circle cx="40" cy="64" r="4" fill="#34d399" stroke="#fef08a" stroke-width="1.2"/>
        <!-- Silver-Lavender Hair Back -->
        <path d="M22,34 Q16,54 24,64 L56,64 Q64,54 58,34 Z" fill="#ddd6fe"/>
        <!-- Face -->
        <circle cx="40" cy="44" r="14" fill="#fde68a"/>
        <!-- Expressive Emerald Eyes & Smile -->
        <circle cx="35" cy="44" r="2.2" fill="#059669"/>
        <circle cx="45" cy="44" r="2.2" fill="#059669"/>
        <circle cx="34.3" cy="43.3" r="0.8" fill="#ffffff"/>
        <circle cx="44.3" cy="43.3" r="0.8" fill="#ffffff"/>
        <path d="M36,50 Q40,53 44,50" fill="none" stroke="#b45309" stroke-width="1.5" stroke-linecap="round"/>
        <!-- Alchemist Goggles on Hat Brim -->
        <path d="M12,30 Q40,22 68,30 L56,24 L40,6 L24,24 Z" fill="#581c87" stroke="#c084fc" stroke-width="1.5"/>
        <circle cx="33" cy="25" r="5" fill="#38bdf8" stroke="#fbbf24" stroke-width="2"/>
        <circle cx="47" cy="25" r="5" fill="#34d399" stroke="#fbbf24" stroke-width="2"/>
        <line x1="38" y1="25" x2="42" y2="25" stroke="#fbbf24" stroke-width="2"/>
      </svg>
    `;
  }

  if (role === 'narrator') {
    return `
      <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" class="portrait-svg portrait-narrator">
        <defs>
          <radialGradient id="eldritchBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#1e1b4b"/>
            <stop offset="65%" stop-color="#0f172a"/>
            <stop offset="100%" stop-color="#090714"/>
          </radialGradient>
          <linearGradient id="grimoireGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fef08a"/>
            <stop offset="100%" stop-color="#d97706"/>
          </linearGradient>
        </defs>
        <circle cx="40" cy="40" r="38" fill="url(#eldritchBg)" stroke="url(#grimoireGold)" stroke-width="2.5"/>
        <!-- Rotating Arcane Astrolabe Ring -->
        <circle cx="40" cy="40" r="31" fill="none" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="5 3" opacity="0.75">
          <animateTransform attributeName="transform" type="rotate" from="0 40 40" to="360 40 40" dur="16s" repeatCount="indefinite"/>
        </circle>
        <circle cx="40" cy="40" r="25" fill="none" stroke="#c084fc" stroke-width="1" stroke-dasharray="3 4" opacity="0.65">
          <animateTransform attributeName="transform" type="rotate" from="360 40 40" to="0 40 40" dur="11s" repeatCount="indefinite"/>
        </circle>
        <!-- Holographic Star Crest -->
        <polygon points="40,14 45,29 60,34 45,39 40,54 35,39 20,34 35,29" fill="#38bdf8" opacity="0.35">
          <animate attributeName="opacity" values="0.25;0.65;0.25" dur="2.4s" repeatCount="indefinite"/>
        </polygon>
        <circle cx="40" cy="34" r="6" fill="#fef08a" stroke="#38bdf8" stroke-width="1.5"/>
        <!-- Floating Ancient Grimoire at Base -->
        <path d="M20,54 Q30,48 40,54 Q50,48 60,54 L60,64 Q50,58 40,64 Q30,58 20,64 Z" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.6"/>
        <line x1="40" y1="53" x2="40" y2="64" stroke="#b45309" stroke-width="1.8"/>
        <!-- Floating Runes -->
        <text x="24" y="28" fill="#fde68a" font-size="8" font-family="serif" opacity="0.85">ᛟ</text>
        <text x="52" y="28" fill="#c084fc" font-size="8" font-family="serif" opacity="0.85">ᛉ</text>
      </svg>
    `;
  }

  return `
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" class="portrait-svg portrait-blacksmith">
      <defs>
        <linearGradient id="torgBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#451a03"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </linearGradient>
      </defs>
      <circle cx="40" cy="40" r="38" fill="url(#torgBg)" stroke="#f59e0b" stroke-width="2.5"/>
      <!-- Heavy Iron Pauldrons -->
      <path d="M10,72 Q40,54 70,72" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
      <!-- Face -->
      <circle cx="40" cy="40" r="14" fill="#fdba74"/>
      <!-- Bushy Eyebrows & Fierce Eyes -->
      <line x1="29" y1="35" x2="37" y2="37" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="51" y1="35" x2="43" y2="37" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="34" cy="39" r="2" fill="#1e293b"/>
      <circle cx="46" cy="39" r="2" fill="#1e293b"/>
      <!-- Magnificent Braided Fiery Red Beard -->
      <path d="M24,42 Q22,66 40,74 Q58,66 56,42 Q48,47 40,47 Q32,47 24,42 Z" fill="#ea580c" stroke="#9a3412" stroke-width="1.5"/>
      <rect x="36" y="62" width="8" height="4" rx="1" fill="#facc15"/>
      <!-- Dwarven Horned Iron Helm -->
      <path d="M22,31 A18,16 0 0,1 58,31 Z" fill="#64748b" stroke="#cbd5e1" stroke-width="1.5"/>
      <path d="M22,28 Q12,20 16,12 Q22,20 26,24" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.2"/>
      <path d="M58,28 Q68,20 64,12 Q58,20 54,24" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.2"/>
      <rect x="38" y="18" width="4" height="14" fill="#f59e0b"/>
    </svg>
  `;
}

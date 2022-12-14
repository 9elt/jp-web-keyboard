/*

layout structure

{
    KeyboardEvent.code (string) : [
        [
            hiragana (char),
            katakana (char),
            shift + hiragana (char),
            shift + katakana (char)
        ], [
            hiragana voiced (char),
            hiragana semi-voiced (char),
        ], [
            katakana voiced (char),
            katakana semi-voiced (char),
        ]
    ]
} 

*/

const JP_keyboard_layout = {
    'Backquote': [['ぬ', 'ヌ', '', ''], ['', ''], ['', '']],
    'Digit1': [['ふ', 'フ', '', ''], ['ぶ', 'ぷ'], ['ブ', 'プ']],
    'Digit2': [['あ', 'ア', 'ぁ', 'ァ'], ['', ''], ['', '']],
    'Digit3': [['う', 'ウ', 'ぅ', 'ゥ'], ['ゔ', ''], ['ヴ', '']],
    'Digit4': [['え', 'エ', 'ぇ', 'ェ'], ['', ''], ['', '']],
    'Digit5': [['お', 'オ', 'ぉ', 'ォ'], ['', ''], ['', '']],
    'Digit6': [['や', 'ヤ', 'ゃ', 'ャ'], ['', ''], ['', '']],
    'Digit7': [['ゆ', 'ユ', 'ゅ', 'ュ'], ['', ''], ['', '']],
    'Digit8': [['よ', 'ヨ', 'ょ', 'ョ'], ['', ''], ['', '']],
    'Digit9': [['わ', 'ワ', 'を', 'ヲ'], ['', ''], ['', '']],
    'Digit0': [['ほ', 'ホ', '', ''], ['ぼ', 'ぽ'], ['ボ', 'ポ']],
    'Minus': [['へ', 'ヘ', '', ''], ['べ', 'ぺ'], ['ベ', 'ペ']],
    'Equal': [['ー', 'ー', '¥', '¥'], ['', ''], ['', '']],

    'KeyQ': [['た', 'タ', '', ''], ['だ', ''], ['ダ', '']],
    'KeyW': [['て', 'テ', '', ''], ['で', ''], ['デ', '']],
    'KeyE': [['い', 'イ', 'ぃ', 'ィ'], ['', ''], ['', '']],
    'KeyR': [['す', 'ス', '', ''], ['ず', ''], ['ズ', '']],
    'KeyT': [['か', 'カ', '', ''], ['が', ''], ['', '']],
    'KeyY': [['ん', 'ン', '', ''], ['', ''], ['', '']],
    'KeyU': [['な', 'ナ', '', ''], ['', ''], ['', '']],
    'KeyI': [['に', 'ニ', '', ''], ['', ''], ['', '']],
    'KeyO': [['ら', 'ラ', '', ''], ['', ''], ['', '']],
    'KeyP': [['せ', 'セ', '', ''], ['ぜ', ''], ['ゼ', '']],
    'BracketLeft': [['゛', '゛', '', ''], ['', ''], ['', '']],
    'BracketRight': [['゜', '゜', '「', '「'], ['', ''], ['', '']],

    'KeyA': [['ち', 'チ', '', ''], ['ぢ', ''], ['ヂ', '']],
    'KeyS': [['と', 'ト', '', ''], ['ど', ''], ['ド', '']],
    'KeyD': [['し', 'シ', '', ''], ['じ', ''], ['ジ', '']],
    'KeyF': [['は', 'ハ', '', ''], ['ば', 'ぱ'], ['バ', 'パ']],
    'KeyG': [['き', 'キ', '', ''], ['ぎ', ''], ['ギ', '']],
    'KeyH': [['く', 'ク', '', ''], ['ぐ', ''], ['グ', '']],
    'KeyJ': [['ま', 'マ', '', ''], ['', ''], ['', '']],
    'KeyK': [['の', 'ノ', '', ''], ['', ''], ['', '']],
    'KeyL': [['り', 'リ', '', ''], ['', ''], ['', '']],
    'Semicolon': [['れ', 'レ', '', ''], ['', ''], ['', '']],
    'Quote': [['け', 'ケ', '', ''], ['げ', ''], ['ゲ', '']],
    'Backslash': [['む', 'ム', '」', '」'], ['', ''], ['', '']],

    'IntlBackslash': [['つ', 'ツ', 'っ', ''], ['づ', ''], ['ヅ', '']],
    'KeyZ': [['さ', 'サ', '', ''], ['ざ', ''], ['ザ', '']],
    'KeyX': [['そ', 'ソ', '', ''], ['ぞ', ''], ['', '']],
    'KeyC': [['ひ', 'ヒ', '', ''], ['び', 'ぴ'], ['ビ', 'ピ']],
    'KeyV': [['こ', 'コ', '', ''], ['ご', ''], ['ゴ', '']],
    'KeyB': [['み', 'ミ', '', ''], ['', ''], ['', '']],
    'KeyN': [['も', 'モ', '', ''], ['', ''], ['', '']],
    'KeyM': [['ね', 'ネ', '、', '、'], ['', ''], ['', '']],
    'Comma': [['る', 'ル', '。', '。'], ['', ''], ['', '']],
    'Period': [['め', 'メ', '・', '・'], ['', ''], ['', '']],
    'Slash': [['ろ', 'ロ', '', ''], ['', ''], ['', '']]
}
// グローバルスタイルをインポート
import '../assets/css/reset.css';
import '../assets/css/fonts/mplus-1p.css';

// コンポーネントをインポート
import MainButton from './components/buttons/MainButton.vue';
import InputField from './components/forms/InputField.vue';
import TopHeader from './components/headers/TopHeader.vue';
import SideHeader from './components/headers/SideHeader.vue';
import type { SideHeaderMenuItem } from './components/headers/SideHeader.vue';

export {
  MainButton,
  InputField,
  TopHeader,
  SideHeader,
};

export type { SideHeaderMenuItem };

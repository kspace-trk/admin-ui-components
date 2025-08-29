// グローバルスタイルをインポート
import '../assets/css/reset.css';
import '../assets/css/fonts/mplus-1p.css';

// コンポーネントをインポート
import MainButton from './components/buttons/MainButton.vue';
import InputField from './components/forms/InputField.vue';
import TextareaField from './components/forms/TextareaField.vue';
import TopHeader from './components/headers/TopHeader.vue';
import SideHeader from './components/headers/SideHeader.vue';
import TextItem from './components/panels/TextItem.vue';
import SectionTextWithLine from './components/sections/SectionTextWithLine.vue';
import type { SideHeaderMenuItem } from './components/headers/SideHeader.vue';

export {
  MainButton,
  InputField,
  TextareaField,
  TopHeader,
  SideHeader,
  TextItem,
  SectionTextWithLine,
};

export type { SideHeaderMenuItem };

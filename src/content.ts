// import { Globe2, MapPin, MenuSquare, Sparkles, Store, Trophy, BadgeCheck, MessageCircle, Camera, type LucideIcon } from 'lucide-react'

// export type QuickAction = {
//   title: string
//   href: string
//   icon: LucideIcon
//   isExternal?: boolean
// }

// export type Branch = {
//   name: string
//   area: string
//   mapsUrl: string
//   note?: string
// }

// export type SocialLink = {
//   label: string
//   href: string
//   icon: LucideIcon
//   isExternal?: boolean
// }

// export type MenuCategory = {
//   title: string
//   subtitle: string
//   note: string
//   imageLabel: string
//   image: string
//   price?: string
// }

// export type MenuItem = {
//   name: string
//   price: string
//   image: string
//   note?: string
// }

// export type MenuSection = {
//   title: string
//   subtitle: string
//   note: string
//   accent: string
//   items: MenuItem[]
// }

// const asset = (fileName: string) => new URL(`./assests/${fileName}`, import.meta.url).href

// export const quickActions: QuickAction[] = [
//   { title: 'المنيو', href: '/menu', icon: MenuSquare },
//   { title: 'الموقع الرسمي', href: 'https://www.samacafe.net/', icon: Globe2, isExternal: true },
//   { title: 'الطلب', href: '#loyalty', icon: Store },
//   { title: 'برنامج الولاء', href: '#loyalty', icon: Trophy },
// ]

// export const socialLinks: SocialLink[] = [
//   { label: 'Instagram', href: '#', icon: BadgeCheck },
//   { label: 'TikTok', href: '#', icon: MessageCircle },
//   { label: 'Snapchat', href: '#', icon: Camera },
// ]

// export const menuCategories: MenuCategory[] = [
//   {
//     title: 'Hot Coffee',
//     subtitle: 'الإسبريسو والمشروبات الساخنة',
//     note: 'القهوة الساخنة الكلاسيكية والمشروبات اليومية المفضلة.',
//     imageLabel: 'Hot Picks',
//     image: asset('americano_17697033563802614.webp.150x150_q100_crop.webp'),
//     price: 'From 9 SAR',
//   },
//   {
//     title: 'Cold Coffee',
//     subtitle: 'المشروبات الباردة والموسمية',
//     note: 'مشروبات باردة بأسلوب منعش ولمسة سما المميزة.',
//     imageLabel: 'Cold Picks',
//     image: asset('iced_latte_17697033722187608.webp.150x150_q100_crop.webp'),
//     price: 'From 12 SAR',
//   },
//   {
//     title: 'Special Drinks',
//     subtitle: 'السلاش والمشروبات الخاصة',
//     note: 'النكهات الخاصة والمشروبات المميزة بطابع سما.',
//     imageLabel: 'Special Picks',
//     image: asset('sama_slush_17773954827570804.webp.150x150_q100_crop.webp'),
//     price: 'From 14 SAR',
//   },
//   {
//     title: 'Desserts',
//     subtitle: 'الحلويات والمرافقة',
//     note: 'حلويات مختارة لتكمل تجربة القهوة وتفتح الشهية من النظرة الأولى.',
//     imageLabel: 'Sweet Picks',
//     image: asset('tiramisu_17745363798220832.webp.150x150_q100_crop.webp'),
//     price: 'From 6 SAR',
//   },
// ]

// export const menuSections: MenuSection[] = [
//   {
//     title: 'المشروبات الساخنة',
//     subtitle: 'Hot Coffee & Beverages',
//     note: 'قهوة اليوم والاختيارات الكلاسيكية بأسلوب واضح وسريع القراءة.',
//     accent: 'espresso',
//     items: [
//       { name: 'إسبريسو', price: '10 SAR', image: asset('americano_17697033563802614.webp.150x150_q100_crop.webp') },
//       { name: 'أمريكانو', price: '12 SAR', image: asset('americano_17697033563802614.webp.150x150_q100_crop.webp') },
//       { name: 'كورتادو', price: '12 SAR', image: asset('cortado_17697033622955286.webp.150x150_q100_crop.webp') },
//       { name: 'فلات وايت', price: '12 SAR', image: asset('flat_white_17697033639457686.webp.150x150_q100_crop.webp') },
//       { name: 'كابتشينو', price: '14 SAR', image: asset('cappuccino_17697033682523740.webp.150x150_q100_crop.webp') },
//       { name: 'لاتيه قرفة', price: '14 SAR', image: asset('cinnamon_latte_17697033715944652.webp.150x150_q100_crop.webp') },
//       { name: 'سبانش لاتيه ساخن', price: '14 SAR', image: asset('spanish_latte_hot_17697033734929132.webp.150x150_q100_crop.webp') },
//       { name: 'كراميل لاتيه', price: '14 SAR', image: asset('caramel_latte_17697033753275036.webp.150x150_q100_crop.webp') },
//       { name: 'هوت شوكليت', price: '17 SAR', image: asset('hot_chocolate_17697033769328700.webp.150x150_q100_crop.webp') },
//       { name: 'موكا', price: '15 SAR', image: asset('mocha_17697033780961698.webp.150x150_q100_crop.webp') },
//       { name: 'وايت موكا', price: '16 SAR', image: asset('white_mocha_17697033804515632.webp.150x150_q100_crop.webp') },
//       { name: 'بمكن سبايس', price: '16 SAR', image: asset('pumpkin_spice_17697033820368676.webp.150x150_q100_crop.webp') },
//       { name: 'قهوة تركي', price: '12 SAR', image: asset('turkish_coffee_17697033832604650.webp.150x150_q100_crop.webp') },
//       { name: 'قهوة فرنسي', price: '14 SAR', image: asset('french_coffee_17697033846711162.webp.150x150_q100_crop.webp') },
//       { name: 'ماتشا', price: '20 SAR', image: asset('matcha_17697033876493060.webp.150x150_q100_crop.webp') },
//       { name: 'كلاودي', price: '17 SAR', image: asset('cloude_17697033898350980.webp.150x150_q100_crop.webp') },
//       { name: 'لاتيه', price: '13 SAR', image: asset('latte_17697033910498080.webp.150x150_q100_crop.webp') },
//       { name: 'شاي انجليزي', price: '5 SAR', image: asset('english_tea_17697033914277980.webp.150x150_q100_crop.webp') },
//       { name: 'قهوة سعودية', price: '7 SAR', image: asset('saudi_coffee_17697033925460412.webp.150x150_q100_crop.webp') }
//     ],
//   },
//   {
//     title: 'المشروبات الباردة',
//     subtitle: 'Cold Coffee & Iced Beverages',
//     note: 'ألوان باردة وطعم أخف لوقت الظهيرة أو الأجواء الحارة.',
//     accent: 'ice',
//     items: [
//       { name: 'بنك ماتشا', price: '25 SAR', image: asset('pink_matcha_17697033596445326.webp.150x150_q100_crop.webp') },
//       { name: 'آيس ماتشا', price: '20 SAR', image: asset('iced_matcha_17697033607515888.webp.150x150_q100_crop.webp') },
//       { name: 'سما سيجنتشر', price: '17 SAR', image: asset('sama_signature_17703902034619198.webp.150x150_q100_crop.webp') },
//       { name: 'آيس أمريكانو', price: '13 SAR', image: asset('iced_americano_17697033711471550.webp.150x150_q100_crop.webp') },
//       { name: 'آيس لاتيه', price: '16 SAR', image: asset('iced_latte_17697033722187608.webp.150x150_q100_crop.webp') },
//       { name: 'سبانش لاتيه', price: '17 SAR', image: asset('spanish_latte_iced_17697033741926798.webp.150x150_q100_crop.webp') },
//       { name: 'آيس وايت موكا', price: '17 SAR', image: asset('iced_white_mocha_17697033760833710.webp.150x150_q100_crop.webp') },
//       { name: 'آيس فلات وايت', price: '15 SAR', image: asset('iced_flat_white_17697033765444122.webp.150x150_q100_crop.webp') },
//       { name: 'بستاشيو لاتيه', price: '19 SAR', image: asset('pistachio_latte_iced_17697033785191150.webp.150x150_q100_crop.webp') },
//       { name: 'آيس كولد برو', price: '17 SAR', image: asset('iced_cold_brew_17697033808072032.webp.150x150_q100_crop.webp') },
//       { name: 'آيس قهوة اليوم', price: '12 SAR', image: asset('iced_coffee_of_the_day_17697033816469322.webp.150x150_q100_crop.webp') },
//       { name: 'آيس كركديه', price: '17 SAR', image: asset('iced_hibiscus_karkadeh_17697033828475218.webp.150x150_q100_crop.webp') }
//     ],
//   },
//   {
//     title: 'المشروبات الخاصة',
//     subtitle: 'Special Drinks & Slushes',
//     note: 'نكهات خاصة وألوان لافتة للمشروبات الباردة الخاصة.',
//     accent: 'spark',
//     items: [
//       { name: 'سلاش توت', price: '14 SAR', image: asset('berry_slush_17697033842820806.webp.150x150_q100_crop.webp') },
//       { name: 'سلاش موهيتو سما', price: '19 SAR', image: asset('sama_slush_17773954827570804.webp.150x150_q100_crop.webp') },
//       { name: 'بلو أوشن', price: '16 SAR', image: asset('blue_ocean_17718706066515894.webp.150x150_q100_crop.webp') },
//       { name: 'سلاش كيوي', price: '14 SAR', image: asset('kiwi_slush_17697033854874506.webp.150x150_q100_crop.webp') },
//       { name: 'سلاش مكس', price: '14 SAR', image: asset('mix_slush_17697033872340742.webp.150x150_q100_crop.webp') },
//       { name: 'موهيتو فراولة', price: '16 SAR', image: asset('strawberry_mojito_17718705180001454.webp.150x150_q100_crop.webp') },
//       { name: 'باشن فروت', price: '16 SAR', image: asset('passion_fruit_17718705547257636.webp.150x150_q100_crop.webp') },
//       { name: 'موهيتو دارك', price: '16 SAR', image: asset('mojito_dark_17718705824015222.webp.150x150_q100_crop.webp') },
//       { name: 'سما روز', price: '16 SAR', image: asset('sama_rose_17697033894501304.webp.150x150_q100_crop.webp') },
//       { name: 'ألفريدو', price: '15 SAR', image: asset('alfredo_17697033906800422.webp.150x150_q100_crop.webp') },
//       { name: 'كلاودي', price: '16 SAR', image: asset('cloude_17697033898350980.webp.150x150_q100_crop.webp') }
//     ],
//   },
//   {
//     title: 'الحلويات',
//     subtitle: 'Desserts & Sweets',
//     note: 'حلويات خفيفة وغنية لتكميل المشروبات الساخنة والباردة.',
//     accent: 'sweet',
//     items: [
//       { name: 'تراميسو', price: '18 SAR', image: asset('tiramisu_17745363798220832.webp.150x150_q100_crop.webp') },
//       { name: 'براونيز', price: '16 SAR', image: asset('brownies_17697033699368534.webp.150x150_q100_crop.webp') },
//       { name: 'ميني براونيز', price: '15 SAR', image: asset('mini_brownies_17697033884796682.webp.150x150_q100_crop.webp') },
//       { name: 'كوكيز', price: '11 SAR', image: asset('cookie_17718706881970548.webp.150x150_q100_crop.webp') },
//       { name: 'ميني كوكيز', price: '14 SAR', image: asset('mini_cookies_17697033773156490.webp.150x150_q100_crop.webp') },
//       { name: 'دونات', price: '6 SAR', image: asset('donut_17733418505837114.webp.150x150_q100_crop.webp') },
//       { name: 'وافل', price: '14 SAR', image: asset('waffles_17697033934393908.webp.150x150_q100_crop.webp') },
//       { name: 'تشوكلت بودينج', price: '17 SAR', image: asset('chocolate_pudding_17703904323496222.webp.150x150_q100_crop.webp') },
//       { name: 'كرانشي كيك', price: '20 SAR', image: asset('crunchy_cake_17718706650337954.webp.150x150_q100_crop.webp') },
//       { name: 'ماتيلدا كيك', price: '23 SAR', image: asset('matilda_cake_17773956041522080.webp.150x150_q100_crop.webp') }
//     ],
//   },
// ]

// export const branches: Branch[] = [
//   { name: 'فرع طريق الخرج', area: 'الخرج', mapsUrl: 'https://maps.google.com/?q=%D8%B3%D9%85%D8%A7+%D9%83%D8%A7%D9%81%D9%8A%D9%87+%D8%A7%D9%84%D8%AE%D8%B1%D8%AC' },
//   { name: 'فرع طريق النصر', area: 'الرياض', mapsUrl: 'https://maps.google.com/?q=%D8%B3%D9%85%D8%A7+%D9%83%D8%A7%D9%81%D9%8A%D9%87+%D8%B7%D8%B1%D9%8A%D9%82+%D8%A7%D9%84%D9%86%D8%B5%D8%B1' },
//   { name: 'فرع طريق الحائر', area: 'الرياض', mapsUrl: 'https://maps.google.com/?q=%D8%B3%D9%85%D8%A7+%D9%83%D8%A7%D9%81%D9%8A%D9%87+%D8%B7%D8%B1%D9%8A%D9%82+%D8%A7%D9%84%D8%AD%D8%A7%D8%A6%D8%B1' },
//   { name: 'فرع حي طويق', area: 'طويق', mapsUrl: 'https://maps.google.com/?q=%D8%B3%D9%85%D8%A7+%D9%83%D8%A7%D9%81%D9%8A%D9%87+%D8%AD%D9%8A+%D8%B7%D9%88%D9%8A%D9%82' },
//   { name: 'فرع حي التعاون', area: 'التعاون', mapsUrl: 'https://maps.google.com/?q=%D8%B3%D9%85%D8%A7+%D9%83%D8%A7%D9%81%D9%8A%D9%87+%D8%AD%D9%8A+%D8%A7%D9%84%D8%AA%D8%B9%D8%A7%D9%88%D9%86' },
//   { name: 'فرع حي الحزم', area: 'الحزم', mapsUrl: 'https://maps.google.com/?q=%D8%B3%D9%85%D8%A7+%D9%83%D8%A7%D9%81%D9%8A%D9%87+%D8%AD%D9%8A+%D8%A7%D9%84%D8%AD%D8%B2%D9%85' },
//   { name: 'فرع حي الروضة', area: 'الروضة', mapsUrl: 'https://maps.google.com/?q=%D8%B3%D9%85%D8%A7+%D9%83%D8%A7%D9%81%D9%8A%D9%87+%D8%AD%D9%8A+%D8%A7%D9%84%D8%B1%D9%88%D8%B6%D8%A9' },
// ]

// export const footerLinks = [
//   { label: 'الموقع الرسمي', href: 'https://www.samacafe.net/', isExternal: true },
//   { label: 'المنيو', href: '/menu' },
//   { label: 'الفروع', href: '#branches' },
//   { label: 'برنامج الولاء', href: '#loyalty' },
// ]

// export const brand = {
//   name: 'Sama Cafe',
//   tagline: 'قهوة مختصة، أجواء مميزة، واحترافية في كل تفاصيلك',
//   heroTitle: 'مرحبًا بك في سما كافيه',
//   heroText: 'اكتشف المنيو، زر الموقع الرسمي، وتواصل مع فروعنا لتبدأ تجربة قهوة راقية ومميزة.',
// }

// export const menuIntro = 'تصميم منيو بسيط وواضح مع أماكن جاهزة للصور، بحيث تقدر تضيف المحتوى الحقيقي لاحقًا بدون تغيير الواجهة.'

// export const loyaltyNote = 'اكتشف مزايا برنامج الولاء وابدأ في جمع النقاط مع كل زيارة.'

// export const placeholderNote = 'بعض الروابط الاجتماعية والخرائط قد تحتاج إلى تحديث لاحقًا مع المعلومات الرسمية.'

// export const branchIcons = {
//   location: MapPin,
//   spark: Sparkles,
// }

import {
  Globe2,
  MapPin,
  MenuSquare,
  Sparkles,
  Store,
  Trophy,
  BadgeCheck,
  MessageCircle,
  Camera,
  Share2,
  type LucideIcon,
} from 'lucide-react'

/* =========================================================
   Types
========================================================= */

export type QuickAction = {
  title: string
  href: string
  icon: LucideIcon
  isExternal?: boolean
}

export type Branch = {
  name: string
  area: string
  mapsUrl: string
  note?: string
}

export type SocialLink = {
  label: string
  href: string
  icon: LucideIcon
  isExternal?: boolean
}

export type MenuCategory = {
  title: string
  subtitle: string
  note: string
  imageLabel: string
  image: string
  price?: string
}

export type MenuItem = {
  name: string
  price: string
  image: string
  note?: string
}

export type MenuSection = {
  title: string
  subtitle: string
  note: string
  accent: string
  items: MenuItem[]
}

/* =========================================================
   Assets
   We search by filename prefix so timestamps do not matter.
========================================================= */

const assets = import.meta.glob('./assests/*', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const asset = (filePrefix: string): string => {
  const entry = Object.entries(assets).find(([path]) => {
    const fileName = path.split('/').pop() ?? ''
    return fileName.startsWith(filePrefix)
  })

  if (!entry) {
    console.warn(`Asset not found: ${filePrefix}`)
    return ''
  }

  return entry[1]
}

/* =========================================================
   Quick Actions
========================================================= */

export const quickActions: QuickAction[] = [
  {
    title: 'المنيو',
    href: '/menu',
    icon: MenuSquare,
  },
  {
    title: 'الموقع الرسمي',
    href: 'https://samacafe.sa/',
    icon: Globe2,
    isExternal: true,
  },
  {
    title: 'Linktree (samacafe.sa)',
    href: 'https://linktr.ee/universal-login#/register?utm_source=linktree&utm_medium=profile&utm_content=samacafe.sa&utm_campaign=cyucta&dropInVariant=not-in&onboardingVariant=new_install',
    icon: Share2,
    isExternal: true,
  },
  {
    title: 'برنامج الولاء',
    href: 'https://loyapro.com/c-r/Mjg1MQ==?fbclid=PAVERFWAQNsPJleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAadN_aAgebmqEHwEqXJZ5nQEIgQRuTUFujp_qK2KX0-RjZFRqEl5QOlh8XPfSg_aem_NsXK07nCR2MAUUO6dECebQ',
    icon: Trophy,
    isExternal: true,
  },
]

/* =========================================================
   Social Media
========================================================= */

export const socialLinks: SocialLink[] = [
  {
    label: 'Linktree (samacafe.sa)',
    href: 'https://linktr.ee/universal-login#/register?utm_source=linktree&utm_medium=profile&utm_content=samacafe.sa&utm_campaign=cyucta&dropInVariant=not-in&onboardingVariant=new_install',
    icon: Share2,
    isExternal: true,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/samacafe.sa/',
    icon: BadgeCheck,
    isExternal: true,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@samacafe.sa',
    icon: MessageCircle,
    isExternal: true,
  },
  {
    label: 'Snapchat',
    href: 'https://www.snapchat.com/add/samacafe.sa/',
    icon: Camera,
    isExternal: true,
  },
]

/* =========================================================
   Main Menu Categories
========================================================= */

export const menuCategories: MenuCategory[] = [
  {
    title: 'Hot Coffee',
    subtitle: 'الإسبريسو والمشروبات الساخنة',
    note: 'القهوة الساخنة الكلاسيكية والمشروبات اليومية المفضلة.',
    imageLabel: 'Hot Picks',
    image: asset('americano_'),
    price: 'From 9 SAR',
  },

  {
    title: 'Cold Coffee',
    subtitle: 'المشروبات الباردة والموسمية',
    note: 'مشروبات باردة بأسلوب منعش ولمسة سما المميزة.',
    imageLabel: 'Cold Picks',
    image: asset('iced_latte_'),
    price: 'From 12 SAR',
  },

  {
    title: 'Special Drinks',
    subtitle: 'السلاش والمشروبات الخاصة',
    note: 'النكهات الخاصة والمشروبات المميزة بطابع سما.',
    imageLabel: 'Special Picks',
    image: asset('sama_slush_'),
    price: 'From 14 SAR',
  },

  {
    title: 'Desserts',
    subtitle: 'الحلويات والمرافقة',
    note: 'حلويات مختارة لتكمل تجربة القهوة وتفتح الشهية من النظرة الأولى.',
    imageLabel: 'Sweet Picks',
    image: asset('tiramisu_'),
    price: 'From 6 SAR',
  },

  {
    title: 'Boxes',
    subtitle: 'بوكسات للمشاركة',
    note: 'اختيارات مميزة للمشاركة والهدايا والطلبات الجماعية.',
    imageLabel: 'Boxes',
    image: asset('caramel_brownie_box_'),
    price: 'View Items',
  },

  {
    title: 'Ice Cream',
    subtitle: 'آيس كريم',
    note: 'نكهات منعشة ولذيذة لمحبي الآيس كريم.',
    imageLabel: 'Ice Cream',
    image: asset('ايس كريم فانيليا'),
    price: 'View Items',
  },

  {
    title: 'Coffee',
    subtitle: 'القهوة المختصة',
    note: 'اختيارات متنوعة من حبوب القهوة لمحبي التحضير المميز.',
    imageLabel: 'Coffee Beans',
    image: asset('ethiopian_coffee_250g_'),
    price: 'View Items',
  },

  {
    title: 'Mug',
    subtitle: 'Sama Collection',
    note: 'أكواب سما بتصاميم أنيقة للاستخدام اليومي.',
    imageLabel: 'Mug Collection',
    image: asset('sama_turquoise_cup_'),
    price: 'View Items',
  },

  {
    title: 'Sandwiches',
    subtitle: 'ساندويتش',
    note: 'اختيارات خفيفة ولذيذة تناسب وقت القهوة.',
    imageLabel: 'Sandwiches',
    image: asset('cheese_sandwich_'),
    price: 'View Items',
  },
]

/* =========================================================
   Complete Menu Sections
========================================================= */

export const menuSections: MenuSection[] = [

  /* =======================================================
     1. HOT DRINKS
  ======================================================= */

  {
    title: 'المشروبات الساخنة',
    subtitle: 'Hot Coffee & Beverages',
    note: 'قهوة اليوم والاختيارات الكلاسيكية بأسلوب واضح وسريع القراءة.',
    accent: 'espresso',

    items: [
      {
        name: 'إسبريسو',
        price: '10 SAR',
        image: asset('americano_'),
      },

      {
        name: 'أمريكانو',
        price: '12 SAR',
        image: asset('americano_'),
      },

      {
        name: 'كورتادو',
        price: '12 SAR',
        image: asset('cortado_'),
      },

      {
        name: 'فلات وايت',
        price: '12 SAR',
        image: asset('flat_white_'),
      },

      {
        name: 'كابتشينو',
        price: '14 SAR',
        image: asset('cappuccino_'),
      },

      {
        name: 'لاتيه قرفة',
        price: '14 SAR',
        image: asset('cinnamon_latte_'),
      },

      {
        name: 'سبانش لاتيه ساخن',
        price: '14 SAR',
        image: asset('spanish_latte_hot_'),
      },

      {
        name: 'كراميل لاتيه',
        price: '14 SAR',
        image: asset('caramel_latte_'),
      },

      {
        name: 'هوت شوكليت',
        price: '17 SAR',
        image: asset('hot_chocolate_'),
      },

      {
        name: 'موكا',
        price: '15 SAR',
        image: asset('mocha_'),
      },

      {
        name: 'وايت موكا',
        price: '16 SAR',
        image: asset('white_mocha_'),
      },

      {
        name: 'بمبكن سبايس',
        price: '16 SAR',
        image: asset('pumpkin_spice_'),
      },

      {
        name: 'قهوة تركي',
        price: '12 SAR',
        image: asset('turkish_coffee_'),
      },

      {
        name: 'قهوة فرنسي',
        price: '14 SAR',
        image: asset('french_coffee_'),
      },

      {
        name: 'ماتشا',
        price: '20 SAR',
        image: asset('matcha_'),
      },

      {
        name: 'كلاودي',
        price: '17 SAR',
        image: asset('cloude_'),
      },

      {
        name: 'لاتيه',
        price: '13 SAR',
        image: asset('latte_'),
      },

      {
        name: 'شاي انجليزي',
        price: '5 SAR',
        image: asset('english_tea_'),
      },

      {
        name: 'قهوة سعودية',
        price: '7 SAR',
        image: asset('saudi_coffee_'),
      },
    ],
  },

  /* =======================================================
     2. COLD DRINKS
  ======================================================= */

  {
    title: 'المشروبات الباردة',
    subtitle: 'Cold Coffee & Iced Beverages',
    note: 'ألوان باردة وطعم أخف لوقت الظهيرة أو الأجواء الحارة.',
    accent: 'ice',

    items: [
      {
        name: 'بنك ماتشا',
        price: '25 SAR',
        image: asset('pink_matcha_'),
      },

      {
        name: 'آيس ماتشا',
        price: '20 SAR',
        image: asset('iced_matcha_'),
      },

      {
        name: 'سما سيجنتشر',
        price: '17 SAR',
        image: asset('sama_signature_'),
      },

      {
        name: 'آيس أمريكانو',
        price: '13 SAR',
        image: asset('iced_americano_'),
      },

      {
        name: 'آيس لاتيه',
        price: '16 SAR',
        image: asset('iced_latte_'),
      },

      {
        name: 'سبانش لاتيه',
        price: '17 SAR',
        image: asset('spanish_latte_iced_'),
      },

      {
        name: 'آيس وايت موكا',
        price: '17 SAR',
        image: asset('iced_white_mocha_'),
      },

      {
        name: 'آيس فلات وايت',
        price: '15 SAR',
        image: asset('iced_flat_white_'),
      },

      {
        name: 'بستاشيو لاتيه',
        price: '19 SAR',
        image: asset('pistachio_latte_iced_'),
      },

      {
        name: 'آيس كولد برو',
        price: '17 SAR',
        image: asset('iced_cold_brew_'),
      },

      {
        name: 'آيس قهوة اليوم',
        price: '12 SAR',
        image: asset('iced_coffee_of_the_day_'),
      },

      {
        name: 'آيس كركديه',
        price: '17 SAR',
        image: asset('iced_hibiscus_karkadeh_'),
      },
    ],
  },

  /* =======================================================
     3. SPECIAL DRINKS
  ======================================================= */

  {
    title: 'المشروبات الخاصة',
    subtitle: 'Special Drinks & Slushes',
    note: 'نكهات خاصة وألوان لافتة للمشروبات الباردة الخاصة.',
    accent: 'spark',

    items: [
      {
        name: 'سلاش توت',
        price: '14 SAR',
        image: asset('berry_slush_'),
      },

      {
        name: 'سلاش موهيتو سما',
        price: '19 SAR',
        image: asset('sama_slush_'),
      },

      {
        name: 'بلو أوشن',
        price: '16 SAR',
        image: asset('blue_ocean_'),
      },

      {
        name: 'سلاش كيوي',
        price: '14 SAR',
        image: asset('kiwi_slush_'),
      },

      {
        name: 'سلاش مكس',
        price: '14 SAR',
        image: asset('mix_slush_'),
      },

      {
        name: 'موهيتو فراولة',
        price: '16 SAR',
        image: asset('strawberry_mojito_'),
      },

      {
        name: 'باشن فروت',
        price: '16 SAR',
        image: asset('passion_fruit_'),
      },

      {
        name: 'موهيتو دارك',
        price: '16 SAR',
        image: asset('mojito_dark_'),
      },

      {
        name: 'سما روز',
        price: '16 SAR',
        image: asset('sama_rose_'),
      },

      {
        name: 'ألفريدو',
        price: '15 SAR',
        image: asset('alfredo_'),
      },

      {
        name: 'كلاودي',
        price: '16 SAR',
        image: asset('cloude_'),
      },
    ],
  },

  /* =======================================================
     4. DESSERTS
  ======================================================= */

  {
    title: 'الحلويات',
    subtitle: 'Desserts & Sweets',
    note: 'حلويات خفيفة وغنية لتكميل المشروبات الساخنة والباردة.',
    accent: 'sweet',

    items: [
      {
        name: 'تراميسو',
        price: '18 SAR',
        image: asset('tiramisu_'),
      },

      {
        name: 'براونيز',
        price: '16 SAR',
        image: asset('brownies_'),
      },

      {
        name: 'ميني براونيز',
        price: '15 SAR',
        image: asset('mini_brownies_'),
      },

      {
        name: 'كوكيز',
        price: '11 SAR',
        image: asset('cookie_'),
      },

      {
        name: 'ميني كوكيز',
        price: '14 SAR',
        image: asset('mini_cookies_'),
      },

      {
        name: 'دونات',
        price: '6 SAR',
        image: asset('donut_'),
      },

      {
        name: 'وافل',
        price: '14 SAR',
        image: asset('waffles_'),
      },

      {
        name: 'تشوكلت بودينج',
        price: '17 SAR',
        image: asset('chocolate_pudding_'),
      },

      {
        name: 'كرانشي كيك',
        price: '20 SAR',
        image: asset('crunchy_cake_'),
      },

      {
        name: 'ماتيلدا كيك',
        price: '23 SAR',
        image: asset('matilda_cake_'),
      },
    ],
  },

  /* =======================================================
     5. BOXES
  ======================================================= */

  {
    title: 'بوكسات',
    subtitle: 'Boxes',
    note: 'بوكسات سما للمشاركة والهدايا والطلبات الجماعية.',
    accent: 'boxes',

    items: [
      {
        name: 'بوكس براوني كراميل',
        price: '65 SAR',
        image: asset('caramel_brownie_box_'),
      },

      {
        name: 'بوكس كوكيز براونيز',
        price: '59 SAR',
        image: asset('mini_cookie_box.webp.webp'),
      },

      {
        name: 'ميني كوكي بوكس',
        price: '39 SAR',
        image: asset('mini_cookies_17697033773156490.webp.150x150_q100_crop.webp'),
      },
    
    ],
  },

  /* =======================================================
     6. ICE CREAM
  ======================================================= */

  {
    title: 'آيس كريم',
    subtitle: 'Ice Cream',
    note: 'نكهات منعشة ولذيذة لمحبي الآيس كريم.',
    accent: 'icecream',

    items: [
      {
        name: 'آيس كريم فانيليا',
        price: '7 SAR',
        image: asset('آيس كريم فانيلا.webp'),
      },

      {
        name: 'آيس كريم مانجا',
        price: '9 SAR',
        image: asset('آيس كريم مانجا.webp'),
      },

      {
        name: 'آيس كريم ميكس',
        price: '9 SAR',
        image: asset('آيس كريم مكس.webp'),
      },

      {
        name: 'آيس كريم بطيخ',
        price: '9 SAR',
        image: asset('ايسكريم بطيخ.webp'),
      },
    ],
  },

  /* =======================================================
     7. COFFEE BEANS
  ======================================================= */

  {
    title: 'القهوة',
    subtitle: 'Coffee Beans',
    note: 'اختيارات متنوعة من حبوب القهوة لمحبي التحضير المميز.',
    accent: 'beans',

    items: [
      {
        name: 'قهوة إثيوبية 250g',
        price: '47 SAR',
        image: asset('ethiopian_coffee_250g_'),
      },

      {
        name: 'قهوة برازيلية 250g',
        price: '51 SAR',
        image: asset('brazilian_coffee_250g_'),
      },

      {
        name: 'قهوة كولومبية 250g',
        price: '49 SAR',
        image: asset('colombian_coffee_250g_'),
      },

      {
        name: 'قهوة كولومبية فاخرة 250g',
        price: '64 SAR',
        image: asset('luxury_colombian_coffee_250g_'),
      },
    ],
  },

  /* =======================================================
     8. MUG
  ======================================================= */

  {
    title: 'Mug',
    subtitle: 'Sama Collection',
    note: 'أكواب سما بتصاميم أنيقة لمحبي القهوة وتجربة سما.',
    accent: 'mug',

    items: [
      {
        name: 'كوب سما تركواز',
        price: '39 SAR',
        image: asset('sama_turquoise_cup_'),
      },

      {
        name: 'كوب سما أبيض',
        price: '39 SAR',
        image: asset('sama_white_cup_'),
      },

      {
        name: 'كوب سما سيراميك 75ml',
        price: '55 SAR',
        image: asset('white_ceramic_sama_cup_75ml_'),
      },

      {
        name: 'كوب سما سيراميك 150ml',
        price: '45 SAR',
        image: asset('white_ceramic_sama_cup_150_ml_'),
      },
    ],
  },

  /* =======================================================
     9. SANDWICHES
  ======================================================= */

  {
    title: 'ساندويتش',
    subtitle: 'Sandwiches',
    note: 'اختيارات خفيفة ولذيذة تناسب وقت القهوة.',
    accent: 'sandwich',

    items: [
      {
        name: 'ساندويتش تشيز',
        price: '10 SAR',
        image: asset('cheese_sandwich_'),
      },

      {
        name: 'ساندويتش تونة',
        price: '16 SAR',
        image: asset('tuna_sandwich_'),
      },

      {
        name: 'ساندويتش حلومي',
        price: '16 SAR',
        image: asset('halloumi_sandwich_'),
      },

      {
        name: 'تشيز كرواسون',
        price: '10 SAR',
        image: asset('cheese_croissant_'),
      },
    ],
  },
]

/* =========================================================
   Branches
========================================================= */

export const branches: Branch[] = [
  {
    name: 'فرع طريق الخرج',
    area: 'الخرج',
    mapsUrl:
      'https://maps.google.com/?q=%D8%B3%D9%85%D8%A7+%D9%83%D8%A7%D9%81%D9%8A%D9%87+%D8%A7%D9%84%D8%AE%D8%B1%D8%AC',
  },

  {
    name: 'فرع طريق النصر',
    area: 'الرياض',
    mapsUrl:
      'https://maps.google.com/?q=%D8%B3%D9%85%D8%A7+%D9%83%D8%A7%D9%81%D9%8A%D9%87+%D8%B7%D8%B1%D9%8A%D9%82+%D8%A7%D9%84%D9%86%D8%B5%D8%B1',
  },

  {
    name: 'فرع طريق الحائر',
    area: 'الرياض',
    mapsUrl:
      'https://maps.google.com/?q=%D8%B3%D9%85%D8%A7+%D9%83%D8%A7%D9%81%D9%8A%D9%87+%D8%B7%D8%B1%D9%8A%D9%82+%D8%A7%D9%84%D8%AD%D8%A7%D8%A6%D8%B1',
  },

  {
    name: 'فرع حي طويق',
    area: 'طويق',
    mapsUrl:
      'https://maps.google.com/?q=%D8%B3%D9%85%D8%A7+%D9%83%D8%A7%D9%81%D9%8A%D9%87+%D8%AD%D9%8A+%D8%B7%D9%88%D9%8A%D9%82',
  },

  {
    name: 'فرع حي التعاون',
    area: 'التعاون',
    mapsUrl:
      'https://maps.google.com/?q=%D8%B3%D9%85%D8%A7+%D9%83%D8%A7%D9%81%D9%8A%D9%87+%D8%AD%D9%8A+%D8%A7%D9%84%D8%AA%D8%B9%D8%A7%D9%88%D9%86',
  },

  {
    name: 'فرع حي الحزم',
    area: 'الحزم',
    mapsUrl:
      'https://maps.google.com/?q=%D8%B3%D9%85%D8%A7+%D9%83%D8%A7%D9%81%D9%8A%D9%87+%D8%AD%D9%8A+%D8%A7%D9%84%D8%AD%D8%B2%D9%85',
  },

  {
    name: 'فرع حي الروضة',
    area: 'الروضة',
    mapsUrl:
      'https://maps.google.com/?q=%D8%B3%D9%85%D8%A7+%D9%83%D8%A7%D9%81%D9%8A%D9%87+%D8%AD%D9%8A+%D8%A7%D9%84%D8%B1%D9%88%D8%B6%D8%A9',
  },

  {
    name: 'فرع حي الشفا',
    area: 'الشفا',
    mapsUrl:
      'https://maps.google.com/?q=%D8%B3%D9%85%D8%A7+%D9%83%D8%A7%D9%81%D9%8A%D9%87+%D8%AD%D9%8A+%D8%A7%D9%84%D8%B4%D9%81%D8%A7',
  },
]

/* =========================================================
   Footer
========================================================= */

export const footerLinks = [
  {
    label: 'الموقع الرسمي',
    href: 'https://www.samacafe.net/',
    isExternal: true,
  },
  {
    label: 'Linktree',
    href: 'https://linktr.ee/universal-login#/register?utm_source=linktree&utm_medium=profile&utm_content=samacafe.sa&utm_campaign=cyucta&dropInVariant=not-in&onboardingVariant=new_install',
    isExternal: true,
  },
  {
    label: 'المنيو',
    href: '/menu',
  },
  {
    label: 'الفروع',
    href: '#branches',
  },
  {
    label: 'برنامج الولاء',
    href: 'https://loyapro.com/c-r/Mjg1MQ==?fbclid=PAVERFWAQNsPJleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAadN_aAgebmqEHwEqXJZ5nQEIgQRuTUFujp_qK2KX0-RjZFRqEl5QOlh8XPfSg_aem_NsXK07nCR2MAUUO6dECebQ',
    isExternal: true,
  },
]

/* =========================================================
   Brand
========================================================= */

export const brand = {
  name: 'Sama Cafe',

  tagline:
    'قهوة مختصة، أجواء مميزة، واحترافية في كل تفاصيلك',

  heroTitle:
    'مرحبًا بك في سما كافيه',

  heroText:
    'اكتشف المنيو، زر الموقع الرسمي، وتواصل مع فروعنا لتبدأ تجربة قهوة راقية ومميزة.',
}

/* =========================================================
   Other Content
========================================================= */

export const menuIntro =
  'تصميم منيو بسيط وواضح مع أماكن جاهزة للصور، بحيث تقدر تضيف المحتوى الحقيقي لاحقًا بدون تغيير الواجهة.'

export const loyaltyNote =
  'اكتشف مزايا برنامج الولاء وابدأ في جمع النقاط مع كل زيارة.'

export const placeholderNote =
  'بعض الروابط الاجتماعية والخرائط قد تحتاج إلى تحديث لاحقًا مع المعلومات الرسمية.'

/* =========================================================
   Branch Icons
========================================================= */

export const branchIcons = {
  location: MapPin,
  spark: Sparkles,
}
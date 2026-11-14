import React, { useState } from 'react';
import {
  Alert, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet,
  Text, TextInput, TouchableOpacity, View
} from 'react-native';

const BLUE = '#168BFF';
const CYAN = '#52DFFF';
const MUTED = '#A4B5C9';

function Button({ title, onPress, secondary = false }) {
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress}
      style={[styles.button, secondary && styles.buttonSecondary]}>
      <Text style={[styles.buttonText, secondary && styles.buttonSecondaryText]}>{title}</Text>
    </TouchableOpacity>
  );
}

function SectionTitle({ kicker, title, detail }) {
  return <View style={styles.sectionHeading}>
    <Text style={styles.kicker}>{kicker}</Text>
    <Text style={styles.sectionTitle}>{title}</Text>
    {!!detail && <Text style={styles.detail}>{detail}</Text>}
  </View>;
}

export default function App() {
  const [page, setPage] = useState('home');
  const [ip, setIp] = useState('');
  const [port, setPort] = useState('7777');

  const connect = () => {
    if (!ip.trim()) {
      Alert.alert('بيانات السيرفر', 'اكتب IP السيرفر أولاً.');
      return;
    }
    Alert.alert('تم حفظ العنوان', 'العنوان: ' + ip.trim() + ':' + (port.trim() || '7777') + '\nواجهة الاتصال جاهزة، وربط عميل SA-MP يحتاج إعداداً إضافياً.');
  };

  const nav = [
    ['home', 'الرئيسية', '⌂'],
    ['rules', 'القوانين', '≡'],
    ['about', 'عن المدينة', '◈'],
    ['settings', 'الإعدادات', '⚙'],
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#050A12" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.hero}>
          <View style={styles.skyGlow} />
          <View style={styles.skyline}>
            {[42, 68, 50, 88, 60, 76, 46, 94, 58, 72, 40, 82].map((h, i) =>
              <View key={i} style={[styles.building, { height: h, width: i % 3 === 0 ? 25 : 19 }]}>
                <View style={styles.windows}><View /><View /><View /></View>
              </View>
            )}
          </View>
          <View style={styles.heroTop}>
            <Text style={styles.official}>NEW STATE CITY • OFFICIAL</Text>
            <View style={styles.live}><View style={styles.liveDot} /><Text style={styles.liveText}>مدينة مفتوحة</Text></View>
          </View>
          <Image source={require('./assets/new-state-city-logo.webp')} style={styles.logo} resizeMode="contain" />
          <Text style={styles.brand}>NEW STATE CITY</Text>
          <Text style={styles.tagline}>عيش التجربة… واكتب قصتك</Text>
          <Text style={styles.heroSub}>حياة واقعية • مجتمع ليبي • عالم مفتوح</Text>
          <View style={styles.heroLine} />
        </View>

        <View style={styles.statusCard}>
          <View style={styles.statusMark}><Text style={styles.statusMarkText}>N</Text></View>
          <View style={styles.statusInfo}>
            <Text style={styles.kicker}>SERVER STATUS</Text>
            <Text style={styles.statusTitle}>بانتظار عنوان السيرفر</Text>
            <Text style={styles.detail}>أدخل بيانات الاتصال لتهيئة الدخول</Text>
          </View>
          <View style={styles.offline}><Text style={styles.offlineText}>غير مربوط</Text></View>
        </View>

        <View style={styles.nav}>
          {nav.map(([key, label, symbol]) =>
            <TouchableOpacity key={key} onPress={() => setPage(key)} style={styles.navItem}>
              <Text style={[styles.navSymbol, page === key && styles.navSelected]}>{symbol}</Text>
              <Text style={[styles.navLabel, page === key && styles.navSelected]}>{label}</Text>
            </TouchableOpacity>
          )}
        </View>

        {page === 'home' && <>
          <SectionTitle kicker="ENTER THE CITY" title="بوابة دخول المدينة" detail="اكتب عنوان السيرفر الذي تريد الاتصال به" />
          <View style={styles.formCard}>
            <Text style={styles.fieldLabel}>IP ADDRESS</Text>
            <TextInput value={ip} onChangeText={setIp} placeholder="مثال: 123.45.67.89"
              placeholderTextColor="#647B95" autoCapitalize="none" autoCorrect={false}
              keyboardType="url" style={styles.input} textAlign="left" />
            <Text style={styles.fieldLabel}>PORT</Text>
            <TextInput value={port} onChangeText={setPort} placeholder="7777"
              placeholderTextColor="#647B95" keyboardType="numeric" style={styles.input} textAlign="left" />
            <Button title="▶   تجهيز الدخول" onPress={connect} />
            <Text style={styles.smallNote}>تقدر تغيّر الـ IP والـ Port في أي وقت.</Text>
          </View>
          <SectionTitle kicker="DISCOVER" title="اكتشف المدينة" />
          <View style={styles.tileGrid}>
            <TouchableOpacity style={styles.tile} onPress={() => setPage('rules')}>
              <Text style={styles.tileIcon}>⚖</Text><Text style={styles.tileTitle}>قوانين المدينة</Text><Text style={styles.tileText}>اعرف نظام الحياة والـ RP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tile} onPress={() => setPage('about')}>
              <Text style={styles.tileIcon}>✦</Text><Text style={styles.tileTitle}>وصف السيرفر</Text><Text style={styles.tileText}>اكتشف NEW STATE CITY</Text>
            </TouchableOpacity>
          </View>
        </>}

        {page === 'rules' && <View style={styles.contentCard}>
          <SectionTitle kicker="CITY REGULATIONS" title="قوانين المدينة" detail="احترم الجميع وخلي تجربتك وتجربة غيرك ممتعة." />
          {[
            ['01', 'احترام اللاعبين', 'ممنوع السب أو المضايقة أو التخريب المتعمد.'],
            ['02', 'اللعب الواقعي', 'التزم بتصرفات الشخصية ولا تخلط بين الواقع واللعبة.'],
            ['03', 'منع الغش', 'ممنوع استخدام البرامج أو الثغرات للحصول على أفضلية.'],
            ['04', 'اتباع الإدارة', 'التزم بتعليمات طاقم الإدارة وقدم اعتراضك باحترام.'],
            ['05', 'حماية الحساب', 'لا تشارك كلمة المرور أو بيانات حسابك مع أي شخص.'],
          ].map(([n, title, desc]) => <View key={n} style={styles.ruleRow}>
            <Text style={styles.ruleNumber}>{n}</Text>
            <View style={styles.ruleCopy}><Text style={styles.ruleTitle}>{title}</Text><Text style={styles.ruleDesc}>{desc}</Text></View>
          </View>)}
        </View>}

        {page === 'about' && <View style={styles.contentCard}>
          <SectionTitle kicker="WELCOME TO NEW STATE" title="مدينة بطابع ليبي" detail="عالم حياة واقعية يجمع الوظائف، المؤسسات، التجارة، والتفاعل بين اللاعبين." />
          <View style={styles.feature}><Text style={styles.featureIcon}>▣</Text><View style={styles.featureCopy}><Text style={styles.featureTitle}>حياة واقعية</Text><Text style={styles.detail}>اصنع شخصيتك وابدأ رحلتك داخل المدينة.</Text></View></View>
          <View style={styles.feature}><Text style={styles.featureIcon}>♙</Text><View style={styles.featureCopy}><Text style={styles.featureTitle}>مجتمع وتفاعل</Text><Text style={styles.detail}>تعاون مع اللاعبين وشارك في أنشطة المدينة.</Text></View></View>
          <View style={styles.feature}><Text style={styles.featureIcon}>⌂</Text><View style={styles.featureCopy}><Text style={styles.featureTitle}>مؤسسات وخدمات</Text><Text style={styles.detail}>تجربة لعب منظمة بقوانين واضحة.</Text></View></View>
          <Text style={styles.disclaimer}>تفاصيل الأنظمة والوظائف تُحدّث حسب تجهيزات السيرفر.</Text>
        </View>}

        {page === 'settings' && <View style={styles.contentCard}>
          <SectionTitle kicker="LAUNCHER SETTINGS" title="الإعدادات" detail="إعدادات واجهة اللانشر." />
          <View style={styles.setting}><Text style={styles.settingValue}>العربية</Text><Text style={styles.settingName}>لغة التطبيق</Text></View>
          <View style={styles.setting}><Text style={styles.settingValue}>داكن</Text><Text style={styles.settingName}>المظهر</Text></View>
          <View style={styles.setting}><Text style={styles.settingValue}>1.1.0</Text><Text style={styles.settingName}>إصدار اللانشر</Text></View>
          <Text style={styles.detail}>حماية حسابك تبدأ بعدم مشاركة بيانات الدخول مع أي شخص.</Text>
        </View>}

        <Text style={styles.footer}>NEW STATE CITY  •  LIBYA  •  ANDROID</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#050A12' },
  container: { padding: 17, paddingBottom: 32 },
  hero: { minHeight: 310, backgroundColor: '#0A1B31', borderRadius: 24, overflow: 'hidden', alignItems: 'center', padding: 18, marginBottom: 17, borderWidth: 1, borderColor: '#183C60' },
  skyGlow: { position: 'absolute', top: -85, width: 280, height: 220, borderRadius: 150, backgroundColor: '#124D7A', opacity: 0.55 },
  skyline: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 110, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-around', opacity: 0.55 },
  building: { backgroundColor: '#07101D', borderTopWidth: 2, borderColor: '#27618C', alignItems: 'center', justifyContent: 'flex-start', paddingTop: 8 },
  windows: { flexDirection: 'row', gap: 4 }, windows: { flexDirection: 'row', gap: 4 },
  heroTop: { width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  official: { color: '#A8C9E8', fontSize: 9, fontWeight: '900', letterSpacing: 1 },
  live: { flexDirection: 'row', alignItems: 'center', gap: 6, backgroundColor: '#102D3C', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 15 },
  liveDot: { width: 6, height: 6, borderRadius: 4, backgroundColor: '#53E2B0' },
  liveText: { color: '#C8F7E8', fontSize: 10, fontWeight: '800' },
  logo: { width: 112, height: 112, marginTop: 27 },
  brand: { color: '#FFFFFF', fontSize: 24, fontWeight: '900', letterSpacing: 2, marginTop: 5 },
  tagline: { color: CYAN, fontSize: 14, fontWeight: '900', marginTop: 7 },
  heroSub: { color: '#B2C7DD', fontSize: 10, marginTop: 9 },
  heroLine: { width: 64, height: 3, backgroundColor: BLUE, borderRadius: 5, marginTop: 13 },
  statusCard: { flexDirection: 'row-reverse', alignItems: 'center', backgroundColor: '#0C1726', borderWidth: 1, borderColor: '#1B3855', borderRadius: 17, padding: 14, marginBottom: 15 },
  statusMark: { width: 42, height: 42, borderRadius: 13, backgroundColor: '#10375B', alignItems: 'center', justifyContent: 'center' },
  statusMarkText: { color: CYAN, fontSize: 23, fontWeight: '900' },
  statusInfo: { flex: 1, alignItems: 'flex-end', marginRight: 11 },
  kicker: { color: CYAN, fontSize: 9, fontWeight: '900', letterSpacing: 1 },
  statusTitle: { color: '#F0F7FF', fontSize: 14, fontWeight: '900', marginTop: 4 },
  detail: { color: MUTED, fontSize: 11, lineHeight: 19, textAlign: 'right', marginTop: 4 },
  offline: { backgroundColor: '#342719', borderRadius: 10, paddingHorizontal: 8, paddingVertical: 6 },
  offlineText: { color: '#FFD38A', fontSize: 9, fontWeight: '800' },
  nav: { flexDirection: 'row-reverse', justifyContent: 'space-around', backgroundColor: '#0B1421', borderWidth: 1, borderColor: '#1B3048', borderRadius: 16, paddingVertical: 11, marginBottom: 22 },
  navItem: { alignItems: 'center', minWidth: 62 },
  navSymbol: { color: '#7890AA', fontSize: 18 },
  navLabel: { color: '#7890AA', fontSize: 9, marginTop: 3, fontWeight: '700' },
  navSelected: { color: CYAN },
  sectionHeading: { alignItems: 'flex-end', marginBottom: 12, marginTop: 3 },
  sectionTitle: { color: '#F2F7FF', fontSize: 19, fontWeight: '900', marginTop: 4, textAlign: 'right' },
  formCard: { backgroundColor: '#0D1929', borderWidth: 1, borderColor: '#1B3B5A', borderRadius: 18, padding: 15, marginBottom: 23 },
  fieldLabel: { color: '#91B4D5', fontSize: 9, fontWeight: '900', letterSpacing: 1, marginBottom: 7, textAlign: 'left' },
  input: { backgroundColor: '#07111E', borderWidth: 1, borderColor: '#244968', borderRadius: 11, color: '#FFFFFF', paddingHorizontal: 13, paddingVertical: 12, fontSize: 14, marginBottom: 13 },
  button: { backgroundColor: BLUE, borderRadius: 12, paddingVertical: 15, alignItems: 'center', marginTop: 3 },
  buttonText: { color: '#FFFFFF', fontSize: 14, fontWeight: '900' },
  buttonSecondary: { backgroundColor: '#10243B', borderWidth: 1, borderColor: '#28547E' },
  buttonSecondaryText: { color: '#DCEEFF' },
  smallNote: { color: '#7890AA', textAlign: 'center', fontSize: 10, marginTop: 10 },
  tileGrid: { flexDirection: 'row', gap: 11, marginBottom: 10 },
  tile: { flex: 1, backgroundColor: '#0D1929', borderWidth: 1, borderColor: '#1B3855', borderRadius: 15, padding: 14, minHeight: 112, alignItems: 'flex-end' },
  tileIcon: { color: CYAN, fontSize: 22, marginBottom: 7 },
  tileTitle: { color: '#F0F7FF', fontSize: 13, fontWeight: '900' },
  tileText: { color: MUTED, fontSize: 10, marginTop: 5, textAlign: 'right' },
  contentCard: { backgroundColor: '#0D1929', borderWidth: 1, borderColor: '#1B3855', borderRadius: 18, padding: 16, marginBottom: 18 },
  ruleRow: { flexDirection: 'row-reverse', alignItems: 'flex-start', borderTopWidth: 1, borderTopColor: '#20364D', paddingVertical: 13, gap: 11 },
  ruleNumber: { color: CYAN, fontSize: 12, fontWeight: '900', paddingTop: 2 },
  ruleCopy: { flex: 1, alignItems: 'flex-end' },
  ruleTitle: { color: '#F0F7FF', fontSize: 13, fontWeight: '900' },
  ruleDesc: { color: MUTED, fontSize: 11, textAlign: 'right', lineHeight: 18, marginTop: 4 },
  feature: { flexDirection: 'row-reverse', alignItems: 'center', borderTopWidth: 1, borderTopColor: '#20364D', paddingVertical: 13, gap: 12 },
  featureIcon: { color: CYAN, fontSize: 22 },
  featureCopy: { flex: 1, alignItems: 'flex-end' },
  featureTitle: { color: '#F0F7FF', fontSize: 13, fontWeight: '900' },
  disclaimer: { color: '#7790AA', fontSize: 10, textAlign: 'right', marginTop: 12, lineHeight: 17 },
  setting: { flexDirection: 'row-reverse', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: '#20364D', paddingVertical: 14 },
  settingName: { color: '#B9C9DA', fontSize: 12 },
  settingValue: { color: CYAN, fontSize: 12, fontWeight: '800' },
  footer: { color: '#607A96', textAlign: 'center', fontSize: 9, letterSpacing: 1.4, marginTop: 18 },
});

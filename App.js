import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const BLUE = '#168BFF';
const CYAN = '#45D9FF';
const MUTED = '#8FA6C2';

function ActionButton({ title, onPress, secondary = false }) {
  return (
    <TouchableOpacity
      activeOpacity={0.82}
      onPress={onPress}
      style={[styles.actionButton, secondary && styles.secondaryButton]}
    >
      <Text style={[styles.actionText, secondary && styles.secondaryText]}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function App() {
  const [page, setPage] = useState('home');

  const notReady = () => Alert.alert(
    'قريباً',
    'سيتم تفعيل الاتصال بعد إضافة IP السيرفر وربط عميل SA-MP Mobile.'
  );

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#050A13" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topLine}>
          <Text style={styles.topLabel}>OFFICIAL SERVER LAUNCHER</Text>
          <View style={styles.livePill}>
            <View style={styles.dot} />
            <Text style={styles.liveText}>غير متصل</Text>
          </View>
        </View>

        <View style={styles.hero}>
          <View style={styles.logoFrame}>
            <Text style={styles.logoLetters}>NS</Text>
            <Text style={styles.logoCrown}>♛</Text>
          </View>
          <Text style={styles.serverName}>NEW STATE CITY</Text>
          <Text style={styles.tagline}>حياتك تبدأ من هنا</Text>
          <View style={styles.blueRule} />
          <Text style={styles.description}>
            عالم واقعي • مجتمع واحد • تجربة مختلفة
          </Text>
        </View>

        <View style={styles.statusCard}>
          <View>
            <Text style={styles.cardEyebrow}>حالة السيرفر</Text>
            <Text style={styles.statusTitle}>بانتظار إعداد الاتصال</Text>
            <Text style={styles.cardHint}>سيظهر عدد اللاعبين عند ربط IP السيرفر</Text>
          </View>
          <View style={styles.statusIcon}>
            <Text style={styles.statusIconText}>⌁</Text>
          </View>
        </View>

        {page === 'home' ? (
          <>
            <ActionButton title="▶   دخول المدينة" onPress={notReady} />
            <View style={styles.quickGrid}>
              <TouchableOpacity style={styles.quickCard} onPress={() => setPage('news')}>
                <Text style={styles.quickIcon}>▤</Text>
                <Text style={styles.quickTitle}>الأخبار</Text>
                <Text style={styles.quickHint}>آخر تحديثات المدينة</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.quickCard} onPress={() => setPage('settings')}>
                <Text style={styles.quickIcon}>⚙</Text>
                <Text style={styles.quickTitle}>الإعدادات</Text>
                <Text style={styles.quickHint}>إعدادات اللانشر</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : page === 'news' ? (
          <View style={styles.infoCard}>
            <Text style={styles.sectionTitle}>أخبار المدينة</Text>
            <Text style={styles.infoText}>لا توجد أخبار حالياً. سيتم عرض الإعلانات والتحديثات هنا عند ربط مصدر الأخبار.</Text>
            <ActionButton title="العودة للرئيسية" secondary onPress={() => setPage('home')} />
          </View>
        ) : (
          <View style={styles.infoCard}>
            <Text style={styles.sectionTitle}>الإعدادات</Text>
            <Text style={styles.settingRow}>اللغة: العربية</Text>
            <Text style={styles.settingRow}>المظهر: داكن</Text>
            <Text style={styles.settingRow}>الإصدار: 1.0.0</Text>
            <ActionButton title="العودة للرئيسية" secondary onPress={() => setPage('home')} />
          </View>
        )}

        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => setPage('home')} style={styles.navItem}>
            <Text style={[styles.navIcon, page === 'home' && styles.navActive]}>⌂</Text>
            <Text style={[styles.navText, page === 'home' && styles.navActive]}>الرئيسية</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setPage('news')} style={styles.navItem}>
            <Text style={[styles.navIcon, page === 'news' && styles.navActive]}>▤</Text>
            <Text style={[styles.navText, page === 'news' && styles.navActive]}>الأخبار</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setPage('settings')} style={styles.navItem}>
            <Text style={[styles.navIcon, page === 'settings' && styles.navActive]}>⚙</Text>
            <Text style={[styles.navText, page === 'settings' && styles.navActive]}>الإعدادات</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.footer}>NEW STATE CITY  •  ANDROID</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#050A13' },
  container: { padding: 20, paddingBottom: 34 },
  topLine: { flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 },
  topLabel: { color: '#7891B0', fontSize: 9, letterSpacing: 2, fontWeight: '800' },
  livePill: { flexDirection: 'row-reverse', alignItems: 'center', gap: 6, backgroundColor: '#111E30', borderColor: '#243B58', borderWidth: 1, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 6 },
  dot: { width: 6, height: 6, borderRadius: 5, backgroundColor: '#F0B84B' },
  liveText: { color: '#D8E6F7', fontSize: 10, fontWeight: '700' },
  hero: { alignItems: 'center', paddingTop: 32, paddingBottom: 28 },
  logoFrame: { width: 132, height: 132, borderRadius: 34, borderWidth: 1, borderColor: '#286EAE', backgroundColor: '#0B1C31', alignItems: 'center', justifyContent: 'center', shadowColor: BLUE, shadowOpacity: 0.3, shadowRadius: 18, elevation: 8 },
  logoLetters: { color: '#E8F5FF', fontSize: 58, fontWeight: '900', letterSpacing: -7, textShadowColor: BLUE, textShadowRadius: 14 },
  logoCrown: { position: 'absolute', top: -18, color: CYAN, fontSize: 38, textShadowColor: BLUE, textShadowRadius: 10 },
  serverName: { color: '#F2F8FF', fontSize: 25, fontWeight: '900', letterSpacing: 2, marginTop: 22 },
  tagline: { color: CYAN, fontSize: 14, fontWeight: '700', marginTop: 7 },
  blueRule: { width: 74, height: 3, borderRadius: 5, backgroundColor: BLUE, marginTop: 17 },
  description: { color: MUTED, fontSize: 11, marginTop: 14 },
  statusCard: { flexDirection: 'row-reverse', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#0D1726', borderColor: '#1D3551', borderWidth: 1, borderRadius: 18, padding: 17, marginBottom: 18 },
  cardEyebrow: { color: CYAN, fontSize: 10, fontWeight: '800', textAlign: 'right' },
  statusTitle: { color: '#EAF4FF', fontSize: 15, fontWeight: '800', textAlign: 'right', marginTop: 5 },
  cardHint: { color: '#7F96B2', fontSize: 10, textAlign: 'right', marginTop: 5 },
  statusIcon: { width: 42, height: 42, borderRadius: 14, backgroundColor: '#102D4C', alignItems: 'center', justifyContent: 'center' },
  statusIconText: { color: CYAN, fontSize: 27, fontWeight: '900' },
  actionButton: { backgroundColor: BLUE, borderRadius: 15, paddingVertical: 17, alignItems: 'center', marginBottom: 16, shadowColor: BLUE, shadowOpacity: 0.25, shadowRadius: 12, elevation: 5 },
  actionText: { color: '#FFFFFF', fontSize: 16, fontWeight: '900' },
  secondaryButton: { backgroundColor: '#10243B', borderWidth: 1, borderColor: '#28547E', shadowOpacity: 0 },
  secondaryText: { color: '#DCEEFF', fontSize: 13 },
  quickGrid: { flexDirection: 'row', gap: 12 },
  quickCard: { flex: 1, backgroundColor: '#0D1726', borderWidth: 1, borderColor: '#1D3551', borderRadius: 16, padding: 16, alignItems: 'flex-end', minHeight: 116 },
  quickIcon: { color: CYAN, fontSize: 23, marginBottom: 9 },
  quickTitle: { color: '#EAF4FF', fontSize: 14, fontWeight: '800' },
  quickHint: { color: '#8198B4', fontSize: 10, marginTop: 5, textAlign: 'right' },
  infoCard: { backgroundColor: '#0D1726', borderColor: '#1D3551', borderWidth: 1, borderRadius: 18, padding: 18, marginTop: 4 },
  sectionTitle: { color: '#F2F8FF', fontSize: 18, fontWeight: '900', textAlign: 'right', marginBottom: 12 },
  infoText: { color: MUTED, fontSize: 13, lineHeight: 22, textAlign: 'right', marginBottom: 18 },
  settingRow: { color: '#D5E5F7', fontSize: 13, textAlign: 'right', paddingVertical: 11, borderBottomWidth: 1, borderBottomColor: '#1B2D43' },
  bottomNav: { flexDirection: 'row-reverse', justifyContent: 'space-around', backgroundColor: '#0B1421', borderWidth: 1, borderColor: '#1B3048', borderRadius: 17, marginTop: 25, paddingVertical: 12 },
  navItem: { alignItems: 'center', minWidth: 70 },
  navIcon: { color: '#7289A5', fontSize: 20 },
  navText: { color: '#7289A5', fontSize: 10, marginTop: 3, fontWeight: '700' },
  navActive: { color: CYAN },
  footer: { color: '#526982', textAlign: 'center', fontSize: 9, letterSpacing: 2, marginTop: 22 },
});

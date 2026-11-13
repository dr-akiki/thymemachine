import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [started, setStarted] = useState(false);
  const [liked, setLiked] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}><Text style={styles.logo}>✦ thyme machine</Text><Text style={styles.private}>PRIVATE BETA</Text></View>
      {!started ? <View style={styles.hero}>
        <Text style={styles.kicker}>A little taste. A little fate.</Text>
        <Text style={styles.title}>Find someone{`\n`}worth making time for.</Text>
        <Text style={styles.body}>A Lebanese at heart dating ritual built around manouche, olive oil, zaatar, and good conversation.</Text>
        <Pressable style={styles.primary} onPress={() => setStarted(true)}><Text style={styles.primaryText}>Build my Taste Map  →</Text></Pressable>
        <Text style={styles.note}>Lebanese at heart. Open to good taste.</Text>
      </View> : <View style={styles.discovery}>
        <Text style={styles.kicker}>TABLE MATCH 01</Text>
        <Text style={styles.subtitle}>One good match beats a hundred swipes.</Text>
        <View style={styles.card}>
          <View style={styles.avatar}><Text style={styles.avatarText}>N</Text></View>
          <Text style={styles.name}>Nour, 29</Text>
          <Text style={styles.location}>Miami · makes time for live music</Text>
          <View style={styles.pills}><Text style={styles.pill}>extra zaatar</Text><Text style={styles.pill}>olive oil loyalist</Text></View>
          <Text style={styles.reason}>You both think the best first dates should accidentally last three hours.</Text>
          <View style={styles.starter}><Text style={styles.starterLabel}>CONVERSATION STARTER</Text><Text style={styles.starterText}>What is the most controversial thing you put on a manouche?</Text></View>
        </View>
        <View style={styles.actions}><Pressable style={styles.pass} onPress={() => setLiked(false)}><Text>Pass for now</Text></Pressable><Pressable style={styles.primary} onPress={() => setLiked(true)}><Text style={styles.primaryText}>{liked ? 'Made time ✓' : 'Make time  →'}</Text></Pressable></View>
        <Text style={styles.note}>Three free table matches today · Thyme Plus unlocks more.</Text>
      </View>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#173d31', paddingHorizontal: 24 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 18, borderBottomWidth: 1, borderBottomColor: '#426052' },
  logo: { color: '#fffaf0', fontSize: 17, fontWeight: '700', letterSpacing: 0.5 }, private: { color: '#b7c6a3', fontSize: 9, letterSpacing: 1.5 },
  hero: { flex: 1, justifyContent: 'center', paddingBottom: 70 }, discovery: { flex: 1, paddingTop: 38 },
  kicker: { color: '#e78b6b', fontSize: 11, letterSpacing: 1.8, textTransform: 'uppercase', marginBottom: 18 },
  title: { color: '#fffaf0', fontSize: 48, lineHeight: 48, letterSpacing: -1.8, marginBottom: 24 }, subtitle: { color: '#fffaf0', fontSize: 31, lineHeight: 34, letterSpacing: -1, marginBottom: 24 },
  body: { color: '#d6dfcf', fontSize: 18, lineHeight: 26, marginBottom: 30 }, primary: { backgroundColor: '#d9e86c', borderRadius: 4, paddingVertical: 15, paddingHorizontal: 17, alignSelf: 'flex-start' }, primaryText: { color: '#173d31', fontWeight: '700', fontSize: 14 },
  note: { color: '#9fb1a5', fontSize: 11, letterSpacing: 1.1, marginTop: 18, textTransform: 'uppercase' }, card: { backgroundColor: '#fffaf0', borderRadius: 6, padding: 22, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 14, shadowOffset: { width: 0, height: 7 } },
  avatar: { width: 58, height: 58, borderRadius: 29, backgroundColor: '#e78b6b', alignItems: 'center', justifyContent: 'center', marginBottom: 13 }, avatarText: { color: '#fffaf0', fontSize: 30 }, name: { color: '#23332d', fontSize: 25, marginBottom: 4 }, location: { color: '#69756d', fontSize: 13, marginBottom: 18 },
  pills: { flexDirection: 'row', flexWrap: 'wrap', gap: 7, marginBottom: 16 }, pill: { backgroundColor: '#eef1d6', color: '#36503f', borderRadius: 15, paddingVertical: 8, paddingHorizontal: 10, fontSize: 10, textTransform: 'uppercase' }, reason: { color: '#23332d', fontSize: 17, lineHeight: 24, marginBottom: 18 },
  starter: { borderLeftWidth: 3, borderLeftColor: '#e78b6b', backgroundColor: '#f1eddc', padding: 13 }, starterLabel: { color: '#b9674e', fontSize: 9, letterSpacing: 1.2, marginBottom: 6 }, starterText: { color: '#23332d', fontSize: 16, lineHeight: 21 },
  actions: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 18 }, pass: { paddingVertical: 14, paddingRight: 12 },
});

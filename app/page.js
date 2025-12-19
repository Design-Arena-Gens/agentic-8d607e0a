'use client';

import { useState } from 'react';

export default function VisitingCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div style={styles.container}>
      <div
        style={styles.cardWrapper}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div style={{
          ...styles.card,
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}>
          {/* Front Side */}
          <div style={styles.cardFront}>
            <div style={styles.logoSection}>
              <div style={styles.logoBox}>
                <h1 style={styles.brandName}>URBAN</h1>
                <h2 style={styles.brandSubtext}>Thredz</h2>
              </div>
              <div style={styles.tagline}>Fashion Forward • Style Elevated</div>
            </div>

            <div style={styles.divider}></div>

            <div style={styles.infoSection}>
              <div style={styles.infoItem}>
                <span style={styles.icon}>📧</span>
                <span style={styles.infoText}>contact@urbanthredz.com</span>
              </div>
              <div style={styles.infoItem}>
                <span style={styles.icon}>📱</span>
                <span style={styles.infoText}>+1 (555) URBAN-99</span>
              </div>
              <div style={styles.infoItem}>
                <span style={styles.icon}>🌐</span>
                <span style={styles.infoText}>www.urbanthredz.com</span>
              </div>
              <div style={styles.infoItem}>
                <span style={styles.icon}>📍</span>
                <span style={styles.infoText}>Fashion District, NYC</span>
              </div>
            </div>

            <div style={styles.socialSection}>
              <span style={styles.socialIcon}>Instagram</span>
              <span style={styles.socialIcon}>Facebook</span>
              <span style={styles.socialIcon}>Twitter</span>
            </div>
          </div>

          {/* Back Side */}
          <div style={styles.cardBack}>
            <div style={styles.backContent}>
              <h3 style={styles.backTitle}>OUR COLLECTIONS</h3>
              <ul style={styles.collectionList}>
                <li style={styles.collectionItem}>• Urban Essentials</li>
                <li style={styles.collectionItem}>• Street Luxe</li>
                <li style={styles.collectionItem}>• Contemporary Casual</li>
                <li style={styles.collectionItem}>• Premium Denim</li>
              </ul>
              <div style={styles.backTagline}>
                "Where Style Meets Street"
              </div>
              <div style={styles.qrPlaceholder}>
                <div style={styles.qrCode}>QR</div>
                <div style={styles.qrText}>Scan for exclusive offers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.instructions}>
        Hover over the card to see more
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    padding: '20px',
  },
  cardWrapper: {
    perspective: '1000px',
    marginBottom: '30px',
  },
  card: {
    width: '400px',
    height: '240px',
    position: 'relative',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.6s',
    cursor: 'pointer',
  },
  cardFront: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
    border: '1px solid #333',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardBack: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    background: 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
    border: '1px solid #333',
    transform: 'rotateY(180deg)',
  },
  logoSection: {
    textAlign: 'center',
  },
  logoBox: {
    marginBottom: '8px',
  },
  brandName: {
    margin: 0,
    fontSize: '36px',
    fontWeight: '900',
    letterSpacing: '4px',
    background: 'linear-gradient(135deg, #ffffff 0%, #cccccc 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textTransform: 'uppercase',
  },
  brandSubtext: {
    margin: 0,
    fontSize: '18px',
    fontWeight: '300',
    letterSpacing: '8px',
    color: '#888',
    textTransform: 'lowercase',
    fontStyle: 'italic',
  },
  tagline: {
    fontSize: '10px',
    color: '#666',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },
  divider: {
    height: '1px',
    background: 'linear-gradient(90deg, transparent, #444, transparent)',
    margin: '12px 0',
  },
  infoSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '11px',
    color: '#ccc',
  },
  icon: {
    fontSize: '14px',
  },
  infoText: {
    letterSpacing: '0.5px',
  },
  socialSection: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    marginTop: '8px',
  },
  socialIcon: {
    fontSize: '9px',
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    padding: '4px 8px',
    border: '1px solid #444',
    borderRadius: '4px',
  },
  backContent: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backTitle: {
    margin: 0,
    fontSize: '16px',
    fontWeight: '700',
    letterSpacing: '3px',
    color: '#fff',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  collectionList: {
    listStyle: 'none',
    padding: 0,
    margin: '12px 0',
    width: '100%',
  },
  collectionItem: {
    fontSize: '13px',
    color: '#ccc',
    marginBottom: '8px',
    letterSpacing: '1px',
  },
  backTagline: {
    fontSize: '14px',
    color: '#888',
    fontStyle: 'italic',
    textAlign: 'center',
    padding: '12px 0',
  },
  qrPlaceholder: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  qrCode: {
    width: '50px',
    height: '50px',
    border: '2px solid #666',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#666',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  qrText: {
    fontSize: '10px',
    color: '#888',
    letterSpacing: '1px',
  },
  instructions: {
    fontSize: '14px',
    color: '#666',
    textAlign: 'center',
    letterSpacing: '1px',
  },
};

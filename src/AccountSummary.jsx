import React from 'react';

const AccountSummary = () => {
  const accountData = {
    cardType: 'Elite Rewards Visa',
    accountNumber: 'XXXX-XXXX-XXXX-4567',
    currentBalance: 1250.75,
    creditLimit: 15000.00,
    availableCredit: 13749.25,
    minPaymentDue: 50.00,
    paymentDueDate: 'Oct 28, 2025',
    rewardsPoints: 4890,
    status: 'Active',
  };
  
  const styles = {
    container: {
      maxWidth: '550px',
      margin: '40px auto',
      padding: '30px',
      borderRadius: '16px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f8fafc', 
      fontFamily: 'Inter, sans-serif',
      border: '1px solid #e2e8f0',
    },
    header: {
      borderBottom: '2px solid #3b82f6',
      paddingBottom: '10px',
      marginBottom: '20px',
      color: '#1e40af', 
      textAlign: 'center',
    },
    balance: {
      fontSize: '36px',
      fontWeight: '700',
      color: '#10b981', 
      marginBottom: '15px',
      textAlign: 'center',
    },
    detailRow: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 0',
      borderBottom: '1px dotted #cbd5e1',
    },
    label: {
      fontWeight: '500',
      color: '#64748b',
    },
    value: {
      fontWeight: '600',
      color: '#1f2937',
    },
    rewards: {
      marginTop: '20px',
      padding: '15px',
      backgroundColor: '#f0f9ff',
      borderRadius: '10px',
      textAlign: 'center',
      border: '1px solid #bae6fd',
      color: '#0369a1',
      fontWeight: '600',
    }
  };

  const DetailRow = ({ label, value }) => (
    <div style={styles.detailRow}>
      <span style={styles.label}>{label}</span>
      <span style={styles.value}>{value}</span>
    </div>
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>{accountData.cardType} Summary</h2>
      
      <p style={{textAlign: 'center', color: '#475569', marginBottom: '20px'}}>
        Account Number: {accountData.accountNumber}
      </p>

      <div style={styles.balance}>
        ${accountData.currentBalance.toFixed(2)}
      </div>
      <p style={{textAlign: 'center', color: '#475569', fontWeight: '500', marginBottom: '30px'}}>
        Current Balance
      </p>

      <DetailRow label="Credit Limit" value={`$${accountData.creditLimit.toFixed(2)}`} />
      <DetailRow label="Available Credit" value={`$${accountData.availableCredit.toFixed(2)}`} />
      <DetailRow label="Minimum Payment Due" value={`$${accountData.minPaymentDue.toFixed(2)}`} />
      <DetailRow label="Payment Due Date" value={accountData.paymentDueDate} />
      <DetailRow label="Account Status" value={accountData.status} />

      <div style={styles.rewards}>
        {accountData.rewardsPoints.toLocaleString()} Rewards Points Available
      </div>
    </div>
  );
};

export default AccountSummary;

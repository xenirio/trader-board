
export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1a202c', /* bg-gray-900 */
      color: '#e2e8f0', /* text-gray-100 */
    }}>
      <h1 style={{
        fontSize: '3rem', /* text-5xl */
        marginBottom: '1rem', /* mb-4 */
        color: '#f7fafc',
      }}>
        TraderBoard
      </h1>
      <p style={{
        fontSize: '1.25rem', /* text-xl */
        color: '#a0aec0', /* text-gray-400 */
      }}>
        Modern trader dashboard
      </p>
    </div>
  );
}

export default function Spinner() {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-border text-secondary"
        role="status"
        style={{
          width: '5rem',
          height: '5rem',
          marginTop: '50px',
          fontSize: '1.5rem',
        }}
      >
        <span className="sr-only"></span>
      </div>
    </div>
  );
}

// export default function Location() {
//   return (
//     <div style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}>
//       <div style={{ width: "100%", height: "400px", borderRadius: "12px", overflow: "hidden" }}>
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115127.53385368391!2d85.2100319!3d23.3441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e11cb83d0b81%3A0x5e1b6e3c30c7f8e4!2sR%20Ali%20Grand%20Mall!5e0!3m2!1sen!2sin!4v1726748723000!5m2!1sen!2sin"
//           width="100%"
//           height="100%"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </div>
//     </div>
//   );
// }


export default function Location() {
  return (
    <div style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}>
      <div
        style={{
          width: "100%",
          height: "400px",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <iframe
          src="https://www.google.com/maps?q=1428,+Sarhul+Nagar,+Ranchi,+Jharkhand,+India&output=embed"
          // src="https://www.google.com/maps?q=R%20Ali%20Grand%20Mall%2C%20Ranchi%2C%20Jharkhand&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

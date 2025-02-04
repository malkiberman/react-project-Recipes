const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
    },
    recipesList: {
      width: "30%", // רשימת המתכונים תתפוס 30% מהמרחב
      borderRight: "2px solid #ddd", // גבול מימין
      paddingRight: "20px",
      height: "100vh",
      overflowY: "auto",
    },
    recipeDetail: {
      width: "65%", // המתכון הנבחר יתפוס 65% מהמרחב
      paddingLeft: "20px",
      height: "100vh",
      overflowY: "auto",
    },
    recipeButton: {
      textAlign: "left",
      padding: "15px",
      marginBottom: "10px",
    },
    loader: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    },
    recipeBox: {
      padding: "20px",
      backgroundColor: "#f5f5f5",
      borderRadius: "8px",
    },
    backButton: {
      marginTop: "20px",
    },
  };
  export default styles;
  
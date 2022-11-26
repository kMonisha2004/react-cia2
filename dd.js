// import * as React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import { Link } from 'react-router-dom';

// export default function BasicSelect() {
//   const [age, setAge] = React.useState('');

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">Age</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age}
//           label="Age"

//           sx={{boxShadow:"inherit"}}
//           onChange={handleChange}
//         >
//           <MenuItem sx={{backgroundColor:"blue"}} value={10}><Link to='/home'>Home</Link></MenuItem>
//           <MenuItem sx={{backgroundColor:"green"}} value={20}><Link to='/about'>About</Link></MenuItem>
//           <MenuItem  sx={{backgroundColor:"red"}} value={30}><Link to='/contact'>Contact</Link></MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }
import * as React from "react";
import './dd.css';
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const Red=()=>{
    document.getElementById('box').style.background="red";
  }
  const Yellow=()=>{
    document.getElementById('box').style.background="yellow";
  }
  const Pink=()=>{
    document.getElementById('box').style.background="pink";
  }

  return (
    <div className="Drop_down">
    <Box sx={{ minWidth: 120 }} >
    <h1><center><b>DROP DOWN</b></center></h1>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Color</InputLabel>
        <Select
          sx={{
            "&:hover": {
              "&& fieldset": {
                border: "3px solid black"
              }
            }
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                "& .MuiMenuItem-root": {
                  backgroundColor: "red"
                },
                "& .MuiMenuItem-root:hover": {
                  backgroundColor: "yellow"
                },
                "& .MuiMenuItem-root.Mui-selected:hover": {
                  backgroundColor: "pink"
                }
              }
            }
          }}
          value={age}
          label="Color"
          onChange={handleChange}
        >
          <MenuItem value={"red"} onClick={Red}>Red</MenuItem>
          <MenuItem value={"yellow"} onClick={Yellow}>Yellow</MenuItem>
          <MenuItem value={"pink"} onClick={Pink}>Pink</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <div className="box" id="box">

    </div>
    </div>
  );
}
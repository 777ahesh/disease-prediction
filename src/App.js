import "./App.scss";
import { FaDribbble } from "react-icons/fa";
import { IoMailOutline, IoChevronForwardCircle, IoStar } from "react-icons/io5";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";
import Symptoms from "./component/Symptoms";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import axios from "axios";
import { Button, Typography } from "@mui/material";
// import Link from "@material-ui/core/Link";

let easeing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const fadeInUp = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easeing,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.5,
      ease: easeing,
    },
  },
};

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const middleName = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const btnGroup = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.6, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing,
    },
  },
};
const star = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.8, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing,
    },
  },
};

const header = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.05, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing,
    },
  },
};

const names = [
  " mild_fever",
  " red_sore_around_nose",
  " toxic_look_(typhos)",
  " patches_in_throat",
  " throat_irritation",
  " abnormal_menstruation",
  " coma",
  " unsteadiness",
  " muscle_pain",
  " loss_of_balance",
  " breathlessness",
  " lethargy",
  " movement_stiffness",
  " sinus_pressure",
  " stomach_pain",
  " rusty_sputum",
  " foul_smell_of urine",
  " increased_appetite",
  " swollen_legs",
  " passage_of_gases",
  " puffy_face_and_eyes",
  " malaise",
  " yellowish_skin",
  " inflammatory_nails",
  " mucoid_sputum",
  " small_dents_in_nails",
  " sunken_eyes",
  " fluid_overload",
  " skin_rash",
  " irregular_sugar_level",
  " skin_peeling",
  " chest_pain",
  " weight_loss",
  " visual_disturbances",
  " loss_of_smell",
  " back_pain",
  " shivering",
  " belly_pain",
  " swelled_lymph_nodes",
  " scurring",
  " slurred_speech",
  " spinning_movements",
  " cold_hands_and_feets",
  " burning_micturition",
  " blackheads",
  " stiff_neck",
  " mood_swings",
  " silver_like_dusting",
  " nausea",
  " loss_of_appetite",
  " brittle_nails",
  " obesity",
  " extra_marital_contacts",
  " enlarged_thyroid",
  " neck_pain",
  " irritation_in_anus",
  " pain_in_anal_region",
  " pus_filled_pimples",
  " weakness_in_limbs",
  " nodal_skin_eruptions",
  " spotting_ urination",
  " dark_urine",
  " weight_gain",
  " swelling_of_stomach",
  " swollen_extremeties",
  " swollen_blood_vessels",
  " watering_from_eyes",
  " acute_liver_failure",
  " headache",
  " polyuria",
  " pain_behind_the_eyes",
  " receiving_blood_transfusion",
  " dehydration",
  " continuous_sneezing",
  " lack_of_concentration",
  " cramps",
  " palpitations",
  " yellowing_of_eyes",
  " blister",
  " irritability",
  " dischromic _patches",
  " blood_in_sputum",
  " indigestion",
  " constipation",
  " fast_heart_rate",
  " painful_walking",
  " muscle_weakness",
  " anxiety",
  " red_spots_over_body",
  " sweating",
  " altered_sensorium",
  " blurred_and_distorted_vision",
  " history_of_alcohol_consumption",
  " restlessness",
  " weakness_of_one_body_side",
  " redness_of_eyes",
  " receiving_unsterile_injections",
  " bruising",
  " prominent_veins_on_calf",
  " chills",
  " drying_and_tingling_lips",
  " abdominal_pain",
  " high_fever",
  " acidity",
  " diarrhoea",
  " depression",
  " congestion",
  " internal_itching",
  " yellow_urine",
  " stomach_bleeding",
  " pain_during_bowel_movements",
  " yellow_crust_ooze",
  " continuous_feel_of_urine",
  " ulcers_on_tongue",
  " muscle_wasting",
  " swelling_joints",
  "itching",
  " phlegm",
  " runny_nose",
  " cough",
  " knee_pain",
  " family_history",
  " distention_of_abdomen",
  " hip_joint_pain",
  " nan",
  " vomiting",
  " excessive_hunger",
  " joint_pain",
  " bladder_discomfort",
  " bloody_stool",
  " dizziness",
  " fatigue",
  " null",
];

function App() {
  const [symptom, setSymptom] = useState([]);
  const [required, setRequired] = useState(null);
  const HandleMultipleChange = (event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    const newOrderType = typeof value === "string" ? value.split(",") : value;
    setSymptom(newOrderType);
    let obj = {};
    // symptom?.forEach((element, index) => {
    //   obj[index + 1] = element;
    // });
    // console.log(JSON.stringify(obj));
    // setRequired(JSON.stringify(obj));
    console.log(symptom);

    obj = symptom.reduce((acc, val, index) => {
      acc[index + 1] = val;
      return acc;
    }, {});

    console.log(obj);

    setRequired(obj);

    // console.log(o);
    // setValue(typeof value === "string" ? value.split(",") : value);
  };

  const [precautions, setPrecautions] = useState();
  const [disease, setDisease] = useState();
  const onSubmit = async () => {
    let data;
    await axios
      .post("http://localhost:8080/", required)
      .then((res) => (data = res))
      .catch((error) => {
        console.log(error);
      });
     console.log(data)
      // console.log(data.data.Precaution);

    // let parsed = data.data;
    // const result = parsed.map(item => {
    //   if (isNaN(item)) {
    //     return parsed.replace(/NaN/g, "null");
    //   }
    //   return item;
    // });
    // console.log(result)  

    // const fixedJsonString = data.data.replace(/NaN/g, "null");
    // const fixedJsonString = data.data.replace(/NaN/g, "null");
      
    // const obj = JSON.parse(fixedJsonString);
    // console.log(obj.Prediction);
    setDisease(data.data.Prediction)
    setPrecautions(data.data.Precaution);
    // setPrecautions(data.data.Precaution);
    // console.log(precautions);
    // console.log(JSON.parse(data.data))
  };

  return (
    <>
      <motion.div initial="initial" animate="animate">
        <motion.header variants={stagger}>
          <motion.div className="logo_wrapper" variants={header}>
            MP<span>Medico</span>
          </motion.div>
          <motion.div className="menu_container" variants={stagger}>
            <motion.span variants={header}>
              <IconContext.Provider
                value={{
                  color: "#000",
                  size: "18px",
                  className: "icons_container",
                }}
              >
                {/* <div className="icon"><FaBehance/></div> */}
                <div className="icon">
                  <FaDribbble />
                </div>
              </IconContext.Provider>
            </motion.span>
            <motion.span variants={header}>
              <IconContext.Provider value={{ color: "#000", size: "18px" }}>
                <div className="icon">
                  <IoMailOutline />
                </div>
                mpmedico.co
              </IconContext.Provider>
            </motion.span>
            <motion.span className="menu" variants={header}>
              <span></span>
              <span></span>
              <span></span>
            </motion.span>
          </motion.div>
        </motion.header>

        <motion.div
          className="content_wrapper"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: easeing }}
        >
          <div className="left_content_wrapper">
            <motion.h2>
              <motion.span
                variants={firstName}
                initial="initial"
                animate="animate"
                className="first"
              >
                <motion.span variants={letter}>D</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>s</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>s</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter} className="second">
                  P
                </motion.span>
                <motion.span variants={letter}>r</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>d</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>c</motion.span>
                <motion.span variants={letter}>t</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>o</motion.span>
                <motion.span variants={letter}>n</motion.span>
              </motion.span>
              <motion.span
                variants={middleName}
                initial="initial"
                animate="animate"
                className="second"
              >
                <motion.span variants={letter}>R</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>c</motion.span>
                <motion.span variants={letter}>o</motion.span>
                <motion.span variants={letter}>m</motion.span>
                <motion.span variants={letter}>m</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>n</motion.span>
                <motion.span variants={letter}>d</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>t</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>o</motion.span>
                <motion.span variants={letter}>n</motion.span>
              </motion.span>
              <motion.span
                variants={lastName}
                initial="initial"
                animate="animate"
                className="last"
              >
                <motion.span variants={letter}>S</motion.span>
                <motion.span variants={letter}>y</motion.span>
                <motion.span variants={letter}>s</motion.span>
                <motion.span variants={letter}>t</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>m</motion.span>
              </motion.span>
            </motion.h2>

            <motion.p variants={fadeInUp}>
              The main aim of this model is to detect disease and recommend
              precautions acoording to systoms observed.
            </motion.p>

            <motion.div className="btn_group" variants={stagger}>
              <motion.div
                className="btn btn_primary"
                variants={btnGroup}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={Symptoms}
              >
                Ask me
                <IconContext.Provider
                  value={{ color: "#14da8f", size: "25px" }}
                >
                  <IoChevronForwardCircle />
                </IconContext.Provider>
              </motion.div>
            </motion.div>

            <motion.div className="review_container" variants={stagger}>
              <motion.p className="more_review" variants={star}></motion.p>
            </motion.div>
          </div>

          <motion.div className="right_content_wrapper">
            <motion.img
              src={process.env.PUBLIC_URL + "/images/pngwing.com.png"}
              alt="bg"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <Typography
        sx={{ fontSize: "20pt", alignContent: "center" }}
        align="center"
      >
        Select Your Symptoms
      </Typography>
      <div className="selection-div">
        <div className="selection-card">
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-name-label">Symptom</InputLabel>
            <Select
              fullWidth
              size="small"
              multiple
              name="restype"
              value={symptom}
              onChange={(e) => HandleMultipleChange(e)}
              //input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={symptom.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button onClick={onSubmit} variant="contained" color="success">
            Search
          </Button>
        </div>
      </div>
      <div className="disease">
        <div className="disease-card">
          <Typography fontSize="20pt">Predicted Disease</Typography>
          <Typography fontSize="20pt" color='green'>{disease && disease}</Typography>

        </div>
        <div className="precautions-card">
          <Typography fontSize="20pt">Precautions</Typography>
          {precautions && (
            <ul>
              {precautions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="precautions">
        
      </div>
    </>
  );
}

export default App;

//lets start framer motion......

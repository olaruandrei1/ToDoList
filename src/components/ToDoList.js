import React, { useState } from "react";
import "./ToDoList.css";
import { TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

const ToDoList = () => {
    const [Data, setData] = useState({
        Notes: "",
        ScheduleDate: "",
        ScheduleTime: "",
        OrderBy: "",
        Monday: false,
        Tuesday: false,
        Wednesdays: false,
        Thursday: false,
        Friday: false,
        Saturday: false,
        Sunday: false,
        // NotesEr: false,
    });
    const handleOrderByChange = (event) => {
        setData({ ...Data, OrderBy: event.target.value });
        console.log(event.target.value);
    };
    const handleOnFinish = () => {
        if (
            Data.Notes !== "" &&
            Data.ScheduleDate !== "" &&
            Data.ScheduleTime !== ""
        ) {
            // setData({ ...Data, NotesEr: true });
            return;
        } else {
            <Alert severity="error">
                You can't add a Note without a note mate!
            </Alert>;
        }
    };

    return (
        <div className="container">
            <div className="container-for-boxes">
                <div className="box1">
                    <TextField
                        required={true}
                        // error={Data.NotesEr}
                        id="standard-basic"
                        label="Note:"
                        variant="standard"
                        className="note"
                        size="medium"
                        value={Data.Notes}
                        onChange={(e) => {
                            setData({ ...Data, Notes: e.target.value });
                        }}
                    />
                    <div className="time-stuff">
                        Date to be finish:&nbsp;&nbsp;&nbsp;
                        <TextField
                            className="schedule-date"
                            size="small"
                            variant="standard"
                            type="date"
                            value={Data.ScheduleDate}
                            onChange={(e) => {
                                setData({
                                    ...Data,
                                    ScheduleDate: e.target.value,
                                });
                            }}
                        />
                        &nbsp;&nbsp;&nbsp;Hour to be finish:&nbsp;&nbsp;&nbsp;
                        <TextField
                            className="schedule-time"
                            size="small"
                            variant="standard"
                            type="time"
                            value={Data.ScheduleTime}
                            onChange={(e) => {
                                setData({
                                    ...Data,
                                    ScheduleTime: e.target.value,
                                });
                            }}
                        />
                    </div>
                    <div className="days">
                        <div className="day">
                            MONDAY{" "}
                            <Checkbox
                                color="secondary"
                                checked={Data.Monday}
                                onChange={(e) => {
                                    setData({
                                        ...Data,
                                        Monday: e.target.checked,
                                    });
                                }}
                            />
                        </div>
                        <div className="day">
                            TUESDAY{" "}
                            <Checkbox
                                color="secondary"
                                checked={Data.Tuesday}
                                onChange={(e) => {
                                    setData({
                                        ...Data,
                                        Tuesday: e.target.checked,
                                    });
                                }}
                            />
                        </div>
                        <div className="day">
                            WEDNESDAYS{" "}
                            <Checkbox
                                color="secondary"
                                checked={Data.Wednesdays}
                                onChange={(e) => {
                                    setData({
                                        ...Data,
                                        Wednesdays: e.target.checked,
                                    });
                                }}
                            />
                        </div>
                        <div className="day">
                            THURSDAY{" "}
                            <Checkbox
                                color="secondary"
                                checked={Data.Thursday}
                                onChange={(e) => {
                                    setData({
                                        ...Data,
                                        Thursday: e.target.checked,
                                    });
                                }}
                            />
                        </div>
                        <div className="day">
                            FRIDAY{" "}
                            <Checkbox
                                color="secondary"
                                checked={Data.Friday}
                                onChange={(e) => {
                                    setData({
                                        ...Data,
                                        Friday: e.target.checked,
                                    });
                                }}
                            />
                        </div>
                        <div className="day">
                            SATURDAY{" "}
                            <Checkbox
                                color="secondary"
                                checked={Data.Saturday}
                                onChange={(e) => {
                                    setData({
                                        ...Data,
                                        Saturday: e.target.checked,
                                    });
                                }}
                            />
                        </div>
                        <div className="day">
                            SUNDAY{" "}
                            <Checkbox
                                color="secondary"
                                checked={Data.Sunday}
                                onChange={(e) => {
                                    setData({
                                        ...Data,
                                        Sunday: e.target.checked,
                                    });
                                }}
                            />
                        </div>
                    </div>

                    <div className="relevence">
                        <RadioGroup
                            name="radio-buttons-group"
                            value={Data.OrderBy}
                            onChange={handleOrderByChange}
                        >
                            <FormControlLabel
                                value="ASC"
                                control={<Radio />}
                                label="ASC"
                            />
                            <FormControlLabel
                                value="DESC"
                                control={<Radio />}
                                label="DESC"
                            />
                        </RadioGroup>
                    </div>
                    <div className="button">
                        <Button
                            variant="contained"
                            style={{ minWidth: "50px", minHeight: "50px" }}
                            onClick={() => {
                                handleOnFinish();
                            }}
                        >
                            <i className="fa-solid fa-calendar-check fa-2xl"></i>
                        </Button>
                    </div>
                </div>

                <div className="box2">
                    <div className="type-of-data">
                        <div className="data">Notes</div>
                        <div className="data">Days</div>
                        <div className="data">Schedule Date</div>
                        <div className="data">Schedule Time</div>
                        <div className="data">Actions</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ToDoList;

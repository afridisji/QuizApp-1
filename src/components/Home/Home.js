import React from 'react';
import styles from "./styles.module.css";
import { useContext } from "react";
import { GameStateContext } from "../../helpers/Contexts";

function Home(props) {


    const { gameState, setGameState, userName, setUserName } = useContext(
        GameStateContext
    );
    //onClick={handleLogout}
    const divStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        flexDirection: "column",
    };
    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>fakebook</h1>
                <button className={styles.white_btn} >
                    Logout
                </button>
            </nav>
            <div>
                <div>
                    <div className="col s12 m6">

                        <div
                            className="card"
                            style={{
                                borderRadius: "16px",
                                margin: "15px",
                                backgroundColor: "#3bb19b",
                                color: "white",
                                // backgroundImage: `url(${BaseBackground})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",

                            }}
                        >
                            <div className="center" onClick={() => {
                                setGameState("menu");
                            }}>
                                <div style={divStyle}>
                                    <h3
                                        className="card-title"
                                        style={{
                                            textAlign: "left",
                                            width: "100%",
                                            float: "left",
                                            fontFamily: "Poppins",
                                            fontWeight: "700",
                                            fontSize: "20px",
                                            paddingTop: '15px',
                                            paddingLeft: '20px',
                                            marginLeft: '15px',
                                        }}
                                    >
                                        Quiz One
                                    </h3>

                                </div>

                                <div style={{ display: "flex", flexDirection: 'row', paddingTop: '20px', }}>
                                    <span style={{ marginLeft: '15px', padding: '4px', fontFamily: 'Poppins', float: "left", backgroundColor: '#FF565E', marginBottom: '15px', borderRadius: '4px', }}>
                                        20 points
                                    </span>
                                    <span style={{ marginLeft: '10px', padding: '4px', fontFamily: 'Poppins', float: "left", backgroundColor: '#FCD034', marginBottom: '15px', borderRadius: '4px', color: '#163E72' }}>
                                        10 questions
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
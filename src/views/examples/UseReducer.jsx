import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

import { initialState, reducer } from "../../store";
import { numberAdd2, login } from "../../store/actions";
  
  const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <SectionTitle title="Exercico #01" />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem Usuario</span>
        )}

        <span className="text">{state.number}</span>
        <div>
        <button className="btn" onClick={() => login(dispatch, "Joao")}>
            Login
          </button>
          <button className="btn" onClick={() => numberAdd2(dispatch)}>
            +2
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "sevenDiv" })}
          >
            *7
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "divTwenty-five" })}
          >
            /7
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "parsNumber" })}
          >
            Parse dos numeros
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberN", payload: -9 })}
          >
            -9
          </button>
        </div>
        </div>
    </div>
  );
};

export default UseReducer;
import '../App.css';
import { PropTypes } from 'prop-types';

function Calculator() {
  return (
    <section>
      <h2>Calculator</h2>

      <div className="tableau">0</div>
      <div className="ligne">
        <Span classons="aucun" valeur="AC" />
        <Span classons="aucun" valeur="+/-" />
        <Span classons="aucun" valeur="%" />
        <Span classons="orange" valeur="÷" />
      </div>
      <div className="ligne">
        <Span classons="aucun" valeur="7" />
        <Span classons="aucun" valeur="8" />
        <Span classons="aucun" valeur="9" />
        <Span classons="orange" valeur="x" />
      </div>
      <div className="ligne">
        <Span classons="aucun" valeur="4" />
        <Span classons="aucun" valeur="5" />
        <Span classons="aucun" valeur="6" />
        <Span classons="orange" valeur="-" />
      </div>
      <div className="ligne">
        <Span classons="aucun" valeur="1" />
        <Span classons="aucun" valeur="2" />
        <Span classons="aucun" valeur="3" />
        <Span classons="orange" valeur="+" />
      </div>
      <div className="ligne">
        <Span classons="deux" valeur="0" />
        <Span classons="dernier" valeur="." />
        <Span classons="dernier orange" valeur="=" />
      </div>
    </section>
  );
}

const Span = ({ classons, valeur }) => (
  <button type="button" className={classons}>
    {valeur}
  </button>
);

Span.propTypes = {
  classons: PropTypes.string.isRequired,
  valeur: PropTypes.string.isRequired,
};

export default Calculator;

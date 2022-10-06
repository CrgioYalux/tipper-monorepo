import './TendencieList.css';

export const TendencieList = (props) => {
  const {
    states = {},
    classes = {},
    events = {} 
  } = props;

  const {
    tendencies = [],
    tendencieByDefault = null
  } = states;

  const {
    containerClass = '' 
  } = classes;

  const {
    onChange = {}
  } = events;

  const {
    selectTendencie = () => {}
  } = onChange;

	return (
		<form className={`TendencieList ${containerClass}`}>
        {
          tendencies.map(({title, amountTips, tendencieID}, index) => (
            <label htmlFor={`tend_${tendencieID}`} key={tendencieID}>
              <span>{index + 1}#</span>
              <input
                type='radio'
                name='tendencies'
                id={`tend_${tendencieID}`}
                onChange={() => selectTendencie(tendencies[index])}
                defaultChecked={tendencieByDefault.tendencieID === tendencieID}
              />
              <div href={`/${title}`}>
                <span>{title}</span>
                <small>{amountTips} tips</small>
              </div>
            </label>
          ))
        }
		</form>
	);
};

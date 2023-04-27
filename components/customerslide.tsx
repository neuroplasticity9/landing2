/* eslint-disable @next/next/no-img-element */
export function CustomerSlideCp(props) {
  return (
    <div className="feedbackItem">
      <img className="feedbackImg" src={props.img} width="84" height="84" alt={props.name} />
      <div className="feedBackCustomer fntPBold">{props.name}</div>
      <div className="productBorder">
        <span></span>
        <img src="img/iconRo1.png" alt="" width="20" height="20" />
        <span></span>
      </div>
      <div className="feedbackText">{props.text}</div>
    </div>
  );
}

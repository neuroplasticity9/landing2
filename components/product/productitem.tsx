/* eslint-disable @next/next/no-img-element */
export function ProductItemCp(props: {name: string; image: string }) {
  return (
    <div className="pro_item">
      <a href="#" title={props.name}>
        <img src={props.image} alt={props.name} className="pro_img" />
      </a>
      <h2 className="pro_title fontATM">
        <a href="#" title={props.name}>{props.name}</a>
      </h2>
      <img className="pro_hot" src="/img/sp-hot.webp" height="74" width="74" alt="" />
      <img className="pro_new" src="/img/sp-new.webp" height="32" width="64" alt="" />
    </div>
  );
}

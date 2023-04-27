/* eslint-disable @next/next/no-img-element */
export function HomeCardCp(props: { title: string; content: string; img: string ; link: string}) {
  return (
    <div className="introItem group">
      <div className="introBorder">
        <h3 className="fntPBold">
          <a href={props.link}>{props.title}</a>
        </h3>
        <div className="productBorder">
          <span></span>
          <img src="img/iconRo1.png" alt={props.title} width="20" height="20" />
          <span></span>
        </div>
        <a className="introImg" href={props.link}>
          <img src={props.img} width="245" height="245" alt={props.title} />
        </a>
        <div className="introContent fntPLight">{props.content}</div>
      </div>
    </div>
  );
}

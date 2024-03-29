/* eslint-disable @next/next/no-img-element */
export function NewItemCp(props: { title: string; content: string; img: string; link: string }) {
  return (
    <div className="newItemG">
      <a href={props.link} className="newg_img" title={props.title}>
        <img src={props.img} width="570" height="315" alt={props.title} />
      </a>
      <div className="newg_info">
        <h3 className="newg_title fntPBold">
          <a href={props.link} title={props.title}>
            {props.title}
          </a>
        </h3>
        <div className="newg_content fntPRegular">{props.content}</div>
      </div>
    </div>
  );
}

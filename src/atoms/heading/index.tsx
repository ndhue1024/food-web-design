import "./style.css"

type TitleProps = {
  title: string;
  text?: string;
}

const Heading = ({ title, text }: TitleProps) => {
  return (
    <div className="title">
      <h1 className='main-title'> {title} </h1>
      { text && <p className="text">{text}</p> }
    </div>
  )
}
export default Heading;
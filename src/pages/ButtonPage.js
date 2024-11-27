//cmd+Shit+L
import Button from "../components/Button"
import { BsAirplaneEnginesFill, BsArrowThroughHeartFill, BsCloudHailFill, BsClipboardPulse, BsEmojiGrin } from "react-icons/bs";

function ButtonPage(){
  const onClickingMe = ()=>{
  }

  return (
    <div>
      <div>
      <Button  secondary outline rounded onClick={onClickingMe} onMouseEnter={onClickingMe} onMouseLeave={onClickingMe} className="mb-5">
        <BsAirplaneEnginesFill />
        Click me
        </Button>
      </div>
      <div>
      <Button danger outline><BsCloudHailFill />Click me again!</Button>
      </div>
      <div>
      <Button warning ><BsArrowThroughHeartFill />Its me</Button>
      </div>
      <div>
      <Button secondary outline><BsClipboardPulse />Dont!!</Button>
      </div>
      <div>
      <Button primary rounded><BsEmojiGrin />Something!</Button>
      </div>
    </div>

  )
}

export default ButtonPage
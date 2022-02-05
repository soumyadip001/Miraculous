import ProgressBar from "@ramonak/react-progress-bar";

export default function Progress({completed}) {
  return (
    <div className="relative">
      <ProgressBar completed={completed} height={3} bgColor={'#3bc8e7'} labelAlignment={'outside'} isLabelVisible={false} />
      <div className="absolute w-full">
        <div className="flex justify-between mt-1">
          <span>00:17</span>
          <span>02:56</span>
        </div>
      </div>
    </div>
  )
}

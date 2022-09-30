import Button from "../button/button"
import Input from "../input/input"
import Line from "../line/line"
import RowButton from "../row-button/row-button"

const LeftSide = () => {
    return (
        <div className="p-6 md:p-20">
            <h2 className="font-mono mb-5 text-4xl font-bold">Log In</h2>
            <p className="max-w-sm mb-12 font-sans font-light text-gray-600">Log in to your account to upload or download pictures, videos or
            music.
            </p>

            <Input />


            <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
                <div className="font-thin text-cyan-700">Forgot password</div>
                <Button />
            </div>

            <Line />

            <p className="py-6 text-sm font-thin text-center text-gray-400">
                or log in with
            </p>

            <RowButton />
        </div>
    )
}

export default LeftSide
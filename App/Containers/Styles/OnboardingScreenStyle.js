import { connect } from '../../Themes/OsmiProvider'

export default connect({
  container: "items-center flex",
  image: "w-full-1 h-full-1 z-0",
  top: "full h-full-1 z-10 absolute flex",
  title: "text-center font-bold text-white text-3xl px-3 mt-24",
  desc: "text-center font-regular text-base mt-3 line-7 text-white px-4",
  bottom: "px-5 absolute flex bottom-24 full justify-end items-center",
  button: "bg-primary full self-center rounded-lg mb-4 p-3",
  label: "text-base text-center text-white font-bold",
  haveAccount: "font-regular text-white text-sm",
  login: "font-bold border-b border-white"
})

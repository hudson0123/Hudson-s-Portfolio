import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <div className="absolute left-0 bottom-0 w-full grid grid-cols-2 gap-20 p-8 bg-indigo-800 text-white font-bold font-mono">
      <h3>© Hudson O&apos;Donnell</h3>
      <div className="flex flex-auto justify-end">
        <a target="blank" href="https://www.linkedin.com/in/hudsonlo/"><FontAwesomeIcon icon={faLinkedin} className='h-5 px-5'/></a>
        <a target="blank" href="https://github.com/hudson0123"><FontAwesomeIcon icon={faGithub} className='h-5 px-5'/></a>
        <a target="blank" href="mailto:hudsonodonnell2004@gmail.com"><FontAwesomeIcon icon={faGoogle} className='h-5 px-5'/></a>
      </div>
    </div>
  )
}

import * as React from 'react'
import { classes } from '../utils'
import '../utils/svg.js'
import './style/index.less'

export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number
  className?: string
  style?: React.CSSProperties
}

const componentName = 'Icon'



const Icon: React.FunctionComponent<IconProps> = props => {
  const { className, size, style, children, ...rest } = props
  return (
    <>
      <svg
        className={classes(componentName, '', [className])}
        aria-hidden="true"
        width="16px" height="16.00px"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={Object.assign({}, style, {
          width: size + 'px',
          height: size + 'px',
          marginRight: '6px'
        })}>
        {props.children}
      </svg>
    </>
  )
}

Icon.displayName = componentName

Icon.defaultProps = {
  size: 16
}

export const MyIcon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path fill="#fff" d="M512.355237 68.755595a202.943599 202.943599 0 1 1-143.492927 59.439213A201.602865 201.602865 0 0 1 512.355237 68.755595m0-68.755595C362.30761 0 240.667502 121.640107 240.667502 271.699194s121.640107 271.687735 271.687735 271.687735 271.699194-121.640107 271.699195-271.687735S662.368487 0 512.355237 0zM766.762399 647.769382a160.429722 160.429722 0 0 1 155.353268 120.425426l32.223456 125.100805a49.595703 49.595703 0 0 1-48.025784 61.948792H118.397135a49.572784 49.572784 0 0 1-48.014324-61.948792l32.211997-125.100805a160.429722 160.429722 0 0 1 155.364726-120.425426h508.791406m0-68.755595h-508.791406A229.185318 229.185318 0 0 0 36.016473 751.051746L3.804476 876.141092c-19.285944 74.897762 37.265533 147.82453 114.592659 147.82453H906.313339c77.338585 0 133.890063-72.961146 114.592659-147.82453l-32.200537-125.089346a229.185318 229.185318 0 0 0-221.943062-172.037959z" />
    </Icon>
  )
}

export const SettingIcon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path fill="#fff" d="M991.078 575.465l-101.71 0c-10.154 57.873-33.486 111.084-66.409 157.07l72.873 72.873c12.488 12.488 12.488 32.725 0 45.212l-45.212 45.212c-12.488 12.488-32.725 12.488-45.212 0l-73.186-73.186c-46.069 32.52-98.801 56.3-156.757 66.076l0 102.356c0 17.654-14.316 31.97-31.97 31.97l-63.941 0c-17.654 0-31.97-14.316-31.97-31.97L447.584 888.722c-58.02-9.789-111.346-32.853-157.377-65.456l-72.566 72.566c-12.488 12.488-32.725 12.488-45.212 0l-45.212-45.212c-12.488-12.488-12.488-32.725 0-45.212l72.361-72.361c-32.859-46.031-56.082-99.434-65.897-157.581L31.97 575.466c-17.654 0-31.97-14.316-31.97-31.97l0-63.94c0-17.654 14.316-31.97 31.97-31.97l101.71 0c10.154-57.873 33.486-111.084 66.409-157.07l-72.873-72.873c-12.488-12.488-12.488-32.725 0-45.212l45.212-45.212c12.488-12.488 32.725-12.488 45.212 0l73.186 73.186c46.069-32.52 98.801-56.3 156.757-66.076L447.583 31.97C447.584 14.316 461.9 0 479.554 0l63.941 0c17.654 0 31.97 14.316 31.97 31.97l0 102.356c58.02 9.789 111.346 32.853 157.377 65.456l72.566-72.566c12.488-12.488 32.725-12.488 45.212 0l45.212 45.212c12.488 12.488 12.488 32.725 0 45.212l-72.362 72.361c32.859 46.031 56.082 99.434 65.897 157.581l101.71 0c17.654 0 31.97 14.316 31.97 31.97l0 63.94C1023.048 561.148 1008.732 575.465 991.078 575.465zM511.524 255.762c-141.251 0-255.762 114.511-255.762 255.762s114.511 255.762 255.762 255.762 255.762-114.511 255.762-255.762S652.775 255.762 511.524 255.762z" p-id="3691"></path>
    </Icon>
  )
}

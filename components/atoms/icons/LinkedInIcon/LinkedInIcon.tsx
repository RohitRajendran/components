/** @module LinkedInIcon */
import React, {FC, memo} from 'react';
import {IconProps} from '../icons';

type LinkedInIconProps = IconProps & {
  /** Boolean to toggle the full icon vs the logo (defaults to false) */
  isFull?: boolean;
};

/** Displays the LinkedInIcon component.*/
const LinkedInIcon: FC<LinkedInIconProps> = ({
  width,
  height,
  fill,
  className,
  style,
  isFull,
}) => {
  return isFull ? (
    <svg
      className={className}
      style={{
        width,
        height,
        ...style,
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 267.504 65.326"
    >
      <path
        data-name="Path 2525"
        d="M1165,274.515a1.2,1.2,0,0,0,1.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025,1.291,2.029h.724l-1.389-2.1Zm-.783-.472h-.785V272.45h.995c.514,0,1.1.084,1.1.757,0,.774-.593.836-1.314.836"
        transform="translate(-901.256 -213.406)"
        fill={fill}
      />
      <path
        data-name="Path 2514"
        d="M203.8,92.5h9.993v36.4h18.5v9.222H203.8Z"
        transform="translate(-203.8 -82.913)"
        fill={fill}
      />
      <path
        data-name="Path 2515"
        d="M322.443,105.384h9.6V136.3h-9.6Zm4.8-15.37a5.569,5.569,0,1,1-5.57,5.569,5.569,5.569,0,0,1,5.57-5.569"
        transform="translate(-289.532 -81.108)"
        fill={fill}
      />
      <path
        data-name="Path 2516"
        d="M506.953,92.486h9.6v27.265l10.88-12.583h11.77l-12.6,14.313,12.335,16.63H526.872l-10.191-15.282h-.126v15.28h-9.6Z"
        transform="translate(-424.284 -82.906)"
        fill={fill}
      />
      <path
        data-name="Path 2517"
        d="M379.2,144.337h9.219v4.225h.131a10.085,10.085,0,0,1,9.09-4.994c9.735,0,11.527,6.405,11.527,14.726v16.954h-9.6V160.217c0-3.588-.066-8.2-5-8.2-4.99,0-5.76,3.907-5.76,7.939v15.288h-9.6Z"
        transform="translate(-331.366 -120.058)"
        fill={fill}
      />
      <path
        data-name="Path 2518"
        d="M639.93,155.719a5.756,5.756,0,0,0-5.894-5.89,6.406,6.406,0,0,0-6.784,5.89Zm8.132,13.7a16.909,16.909,0,0,1-13.128,6.151c-9.6,0-17.286-6.408-17.286-16.331s7.685-16.328,17.286-16.328c8.973,0,14.6,6.4,14.6,16.328v3.01H627.252a7.171,7.171,0,0,0,7.235,6.019,8.193,8.193,0,0,0,6.851-3.778Z"
        transform="translate(-504.794 -119.581)"
        fill={fill}
      />
      <path
        data-name="Path 2519"
        d="M761.844,114.645c-4.8,0-7.68,3.205-7.68,7.875s2.879,7.878,7.68,7.878,7.687-3.2,7.687-7.878-2.881-7.875-7.687-7.875m16.525,23.437h-8.838v-4.1H769.4a12.071,12.071,0,0,1-9.544,4.868c-9.224,0-15.3-6.657-15.3-16.071,0-8.646,5.377-16.585,14.216-16.585,3.973,0,7.684,1.087,9.861,4.1h.126V92.473h9.609Z"
        transform="translate(-597.094 -82.896)"
        fill={fill}
      />
      <path
        data-name="Path 2520"
        d="M958.98,112.559h-9.6V97.525c0-3.585-.064-8.2-4.993-8.2-5,0-5.765,3.906-5.765,7.939v15.294h-9.6V81.642h9.216v4.225h.129a10.1,10.1,0,0,1,9.093-4.994c9.73,0,11.524,6.4,11.524,14.726ZM918.19,77.416a5.571,5.571,0,1,1,5.57-5.572,5.571,5.571,0,0,1-5.57,5.572m4.8,35.143h-9.61V81.642h9.61Zm40.776-55.2h-55.21a4.728,4.728,0,0,0-4.781,4.67v55.439a4.731,4.731,0,0,0,4.781,4.675h55.21a4.741,4.741,0,0,0,4.8-4.675V62.025a4.738,4.738,0,0,0-4.8-4.67"
        transform="translate(-712.896 -57.355)"
        fill={fill}
      />
      <path
        data-name="Path 2526"
        d="M1156.525,264.22a4.418,4.418,0,1,0,.085,0h-.085m0,8.33a3.874,3.874,0,1,1,3.809-3.938c0,.022,0,.043,0,.065a3.791,3.791,0,0,1-3.708,3.871h-.1"
        transform="translate(-893.482 -207.809)"
        fill={fill}
      />
    </svg>
  ) : (
    <svg
      className={className}
      style={{
        width,
        height,
        ...style,
      }}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m325.398484 310.104625h-2.157568v-3.376705c0-.806131-.015653-1.841839-1.122265-1.841839-1.12357 0-1.294888.877439-1.294888 1.78314v3.435404h-2.157567v-6.945595h2.070603v.950487h.028698c.288719-.546986.99269-1.122235 2.04408-1.122235 2.185395 0 2.588907 1.437469 2.588907 3.308006zm-9.167704-7.893037c-.6931 0-1.253581-.56177-1.253581-1.252677 0-.690038.560481-1.250938 1.253581-1.250938.69136 0 1.251406.5609 1.251406 1.250938 0 .690907-.560046 1.252677-1.251406 1.252677zm-1.081828 7.893037h2.162351v-6.945595h-2.162351zm10.13387-13.104625h-10.566079c-1.494469 0-2.716743 1.22311-2.716743 2.717104v10.566227c0 1.494429 1.222274 2.716669 2.716743 2.716669h10.566079c1.49447 0 2.717178-1.22224 2.717178-2.716669v-10.566227c0-1.493994-1.222708-2.717104-2.717178-2.717104z"
        fill={fill}
        fillRule="evenodd"
        transform="translate(-312 -297)"
      />
    </svg>
  );
};

LinkedInIcon.defaultProps = {
  width: '1.8rem',
  height: '1.5rem',
  fill: '#fff',
};

export {LinkedInIcon as PureLinkedInIcon};
export default memo(LinkedInIcon);

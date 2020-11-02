import React from "react";

export default function App(props) {
  return (
    <>
      <svg
        width="21"
        height="20"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={props.style}
        onClick={props.onClick}
      >
        <path
          d="M16.1594 9.99864L14.944 9.01427C15.0015 8.68028 15.0312 8.33927 15.0312 7.99825C15.0312 7.65724 15.0015 7.31622 14.944 6.98224L16.1594 5.99786C16.251 5.92352 16.3166 5.8245 16.3475 5.71397C16.3783 5.60345 16.3729 5.48665 16.3319 5.37911L16.3152 5.33341C15.9806 4.44752 15.4796 3.62628 14.8364 2.90939L14.803 2.87247C14.725 2.78555 14.621 2.72307 14.5047 2.69326C14.3885 2.66345 14.2654 2.66771 14.1517 2.70548L12.6432 3.21349C12.0866 2.78107 11.465 2.44005 10.7933 2.20099L10.502 0.706848C10.4801 0.594422 10.4225 0.490993 10.337 0.410301C10.2515 0.329609 10.1421 0.275475 10.0233 0.25509L9.97323 0.246301C9.00653 0.0810669 7.98973 0.0810669 7.02304 0.246301L6.97294 0.25509C6.85418 0.275475 6.74478 0.329609 6.65928 0.410301C6.57377 0.490993 6.5162 0.594422 6.49423 0.706848L6.20106 2.20802C5.53474 2.44713 4.91423 2.78797 4.36415 3.217L2.84452 2.70548C2.7309 2.66741 2.60775 2.66299 2.49142 2.69282C2.37509 2.72265 2.27109 2.78531 2.19325 2.87247L2.15985 2.90939C1.51739 3.62679 1.01647 4.44789 0.681046 5.33341L0.664347 5.37911C0.580851 5.59884 0.649503 5.84493 0.836906 5.99786L2.06708 6.99278C2.00956 7.32325 1.98173 7.66075 1.98173 7.99649C1.98173 8.33399 2.00956 8.67149 2.06708 9.0002L0.836906 9.99513C0.745237 10.0695 0.679629 10.1685 0.648806 10.279C0.617982 10.3895 0.623402 10.5063 0.664347 10.6139L0.681046 10.6596C1.01689 11.5455 1.51415 12.3629 2.15985 13.0836L2.19325 13.1205C2.27128 13.2074 2.37528 13.2699 2.49154 13.2997C2.6078 13.3295 2.73087 13.3253 2.84452 13.2875L4.36415 12.776C4.91708 13.2066 5.53495 13.5477 6.20106 13.785L6.49423 15.2861C6.5162 15.3986 6.57377 15.502 6.65928 15.5827C6.74478 15.6634 6.85418 15.7175 6.97294 15.7379L7.02304 15.7467C7.99862 15.9128 8.99765 15.9128 9.97323 15.7467L10.0233 15.7379C10.1421 15.7175 10.2515 15.6634 10.337 15.5827C10.4225 15.502 10.4801 15.3986 10.502 15.2861L10.7933 13.792C11.4648 13.5536 12.0898 13.2114 12.6432 12.7795L14.1517 13.2875C14.2654 13.3256 14.3885 13.33 14.5048 13.3002C14.6212 13.2703 14.7252 13.2077 14.803 13.1205L14.8364 13.0836C15.4821 12.3611 15.9794 11.5455 16.3152 10.6596L16.3319 10.6139C16.4154 10.3977 16.3468 10.1516 16.1594 9.99864ZM13.6266 7.18966C13.673 7.45509 13.6972 7.72755 13.6972 8.00001C13.6972 8.27247 13.673 8.54493 13.6266 8.81036L13.5042 9.51524L14.8902 10.6385C14.6801 11.0971 14.4149 11.5312 14.0998 11.9322L12.3779 11.3539L11.7953 11.8074C11.3518 12.152 10.8583 12.4227 10.3239 12.6125L9.61698 12.8639L9.28485 14.569C8.76081 14.6252 8.23174 14.6252 7.7077 14.569L7.37557 12.8604L6.67421 12.6055C6.1454 12.4156 5.6537 12.1449 5.21395 11.8022L4.63134 11.3469L2.89833 11.9305C2.5829 11.5279 2.31942 11.0938 2.1079 10.6367L3.50878 9.50294L3.38817 8.79981C3.34364 8.5379 3.31952 8.2672 3.31952 8.00001C3.31952 7.73106 3.34179 7.46212 3.38817 7.2002L3.50878 6.49708L2.1079 5.36329C2.31757 4.9045 2.5829 4.47208 2.89833 4.06954L4.63134 4.65314L5.21395 4.19786C5.6537 3.85509 6.1454 3.58439 6.67421 3.39454L7.37743 3.14317L7.70956 1.43458C8.23094 1.37833 8.76346 1.37833 9.28671 1.43458L9.61883 3.13966L10.3258 3.39103C10.8583 3.58087 11.3537 3.85157 11.7972 4.1961L12.3798 4.64962L14.1016 4.0713C14.4171 4.47384 14.6806 4.90802 14.8921 5.36505L13.506 6.48829L13.6266 7.18966ZM8.49999 4.73048C6.69647 4.73048 5.23436 6.11563 5.23436 7.82423C5.23436 9.53282 6.69647 10.918 8.49999 10.918C10.3035 10.918 11.7656 9.53282 11.7656 7.82423C11.7656 6.11563 10.3035 4.73048 8.49999 4.73048ZM9.96952 9.21642C9.77678 9.39954 9.54772 9.54475 9.29552 9.6437C9.04332 9.74265 8.77296 9.79338 8.49999 9.79298C7.9452 9.79298 7.42382 9.58731 7.03046 9.21642C6.83716 9.03382 6.68388 8.81681 6.57943 8.57789C6.47499 8.33896 6.42144 8.08283 6.42186 7.82423C6.42186 7.29864 6.63895 6.8047 7.03046 6.43204C7.42382 6.05938 7.9452 5.85548 8.49999 5.85548C9.05477 5.85548 9.57616 6.05938 9.96952 6.43204C10.1628 6.61464 10.3161 6.83164 10.4205 7.07057C10.525 7.30949 10.5785 7.56562 10.5781 7.82423C10.5781 8.34981 10.361 8.84376 9.96952 9.21642Z"
          fill="#5B5B5B"
        />
      </svg>
    </>
  );
}

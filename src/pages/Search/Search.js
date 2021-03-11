import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../../components/Header/Header';
import './Search.css'

const menus = [{text: 'Home', link: 'home'}, {text: 'Search', link: 'search'}, {text: 'Team', link: 'team'}];

export default class Search extends Component {
    render() {
        return (
            <>
            <Header menus={menus} />
            <section>
                <div className="row">
                    <div className="column left">
                        <div className="title">
                            <form>
                                <div className="textInput">
                                    <input type="text" placeholder="Enter Keyword/Tag to search about"></input>
                                    <div className="icnSearch">                                    
                                        <i class="fas fa-search"></i>                                                                        
                                    </div>
                                </div>
                                <div className="textInput">
                                    <input type="text" placeholder="Enter how many tweets to search"></input>
                                    <div className="icnSearch">
                                        <i class="fas fa-hashtag"></i>                                               
                                    </div>
                                </div>
                            </form>
                        </div>
                        <br></br>
                        
                        <NavLink to="/search">
                        <button className="btn"><span>Search</span></button>
                        </NavLink>
                        {/* <svg className="homeLeftsvg" width="640" height="230" viewBox="0 0 640 230" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M491.721 408.792C446.421 456.033 302.222 444.088 164.809 420.12C27.3954 396.152 -76.0884 331.363 -66.3289 275.411C-56.5694 219.459 461.5 66.9999 583.771 105.925C683.5 163.5 591.313 304.933 491.721 408.792Z" fill="#4DD2C1" fill-opacity="0.4"/>
                        </svg> */}

                    </div>
                    <div className="column right">
                        {/* <img className="homeSVG" src={homesvg}></img> */}

                        <svg className="searchSVG" width="911" height="691" viewBox="0 0 1201 723" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="VectorartSearch">
                            <g id="undraw_Personal_goals_re_iow7 (1) 1" clip-path="url(#clip0)">
                            <path id="Vector" d="M821.769 466.761C820.826 468.521 819.841 470.25 818.826 471.97C779.869 537.807 689.246 578.696 536.413 557.055C449.636 544.183 412.68 591.397 376.895 639.756C376.283 640.591 375.672 641.426 375.05 642.26C337.575 692.973 300.474 743.827 207.705 726.923C109.359 711.839 48.6641 634.376 39.2721 551.675C39.1577 550.669 39.0544 549.654 38.9608 548.648C33.6844 495.029 49.9908 439.509 91.591 397.595C116.719 372.284 152.421 358.839 189.274 359.261C200.369 359.461 211.461 358.664 222.405 356.878C224.82 356.465 227.163 356.013 229.443 355.5C276.393 345.092 298.028 314.149 311.296 276.389C311.608 275.494 311.919 274.598 312.219 273.693C342.686 183.641 328.598 57.2455 494.233 75.8393C642.451 86.4384 751.226 166.163 804.582 258.147C805.111 259.072 805.639 259.997 806.158 260.922C820.823 286.445 831.287 314.033 837.174 342.689C837.506 344.297 837.806 345.906 838.086 347.515C845.633 390.234 840.688 431.756 821.769 466.761Z" fill="#F2F2F2"/>
                            <path id="Vector_2" d="M806.388 253.69C795.754 265.95 783.772 277.048 770.656 286.785C719.56 324.797 654.842 345.412 590.996 349.736C558.184 351.974 525.211 349.801 493.012 343.28C460.254 336.623 429.01 324.898 398.75 311.201C369.32 297.877 340.761 282.853 311.527 269.157C311.839 268.262 312.149 267.367 312.45 266.462C344.327 281.345 375.551 297.746 407.8 311.925C438.184 325.29 469.636 336.191 502.528 342.023C535.347 347.803 568.841 349.076 602.025 345.804C665.696 339.59 730.465 316.803 779.415 276.035C788.606 268.382 797.103 259.977 804.813 250.915C805.342 251.84 805.87 252.765 806.388 253.69Z" fill="white"/>
                            <g id="PieID">
                            <path id="Pie3ID" d="M585.168 46.946C585.094 46.946 585.02 46.9483 584.945 46.9529C506.377 51.7279 444.832 115.346 444.832 191.786C444.832 268.227 506.377 331.845 584.945 336.619C585.415 336.649 585.886 336.585 586.328 336.431C586.771 336.277 587.176 336.036 587.518 335.722C587.859 335.414 588.131 335.041 588.316 334.626C588.501 334.211 588.596 333.763 588.594 333.311V50.2607C588.592 49.3807 588.23 48.5375 587.588 47.9161C586.945 47.2946 586.075 46.9458 585.168 46.946Z" fill="#00BFA6"/>
                            <path id="Pie2ID" d="M705.295 288.505C704.13 288.504 703.013 288.056 702.188 287.258L600.6 188.71C600.191 188.316 599.867 187.847 599.647 187.331C599.426 186.815 599.313 186.261 599.315 185.702V50.2607C599.313 49.6796 599.434 49.1042 599.672 48.5708C599.91 48.0375 600.26 47.5577 600.698 47.1616C601.138 46.7606 601.657 46.4514 602.225 46.2532C602.793 46.055 603.397 45.972 603.999 46.0093C683.079 50.8151 745.026 114.848 745.026 191.786C745.029 226.734 732.113 260.525 708.624 287.023C708.229 287.467 707.744 287.828 707.199 288.082C706.655 288.337 706.062 288.48 705.458 288.502C705.403 288.504 705.349 288.505 705.295 288.505Z" fill="#3F3D56"/>
                            <path id="Pie1ID" d="M603.719 337.571C602.598 337.571 601.518 337.156 600.7 336.413C600.261 336.016 599.911 335.536 599.673 335.002C599.434 334.468 599.313 333.892 599.315 333.31V211.107C599.315 210.266 599.572 209.443 600.054 208.743C600.536 208.044 601.221 207.499 602.022 207.177C602.824 206.855 603.706 206.77 604.556 206.934C605.407 207.098 606.189 207.503 606.802 208.098L695.45 294.093C695.871 294.502 696.202 294.99 696.423 295.527C696.644 296.064 696.749 296.638 696.734 297.216C696.719 297.794 696.582 298.363 696.333 298.888C696.084 299.413 695.728 299.884 695.285 300.271C670.047 322.313 637.882 335.452 603.991 337.563C603.901 337.569 603.809 337.571 603.719 337.571Z" fill="#575A89"/>
                            </g>
                            <path id="Vector_3" d="M838.317 340.284C824.094 364.75 804.015 386.331 781.022 403.436C729.926 441.448 665.208 462.063 601.362 466.387C568.55 468.625 535.577 466.452 503.379 459.931C470.621 453.274 439.376 441.549 409.117 427.852C378.308 413.904 348.443 398.086 317.768 383.877C287.125 369.678 255.632 357.57 222.635 349.646C225.051 349.234 227.394 348.781 229.674 348.268C231.831 348.811 233.98 349.374 236.122 349.958C300.643 367.455 357.586 401.938 418.167 428.576C448.551 441.941 480.002 452.842 512.895 458.674C545.714 464.454 579.207 465.727 612.391 462.455C676.062 456.241 740.832 433.454 789.781 392.686C809.157 376.62 825.302 357.218 837.405 335.457C837.737 337.066 838.037 338.675 838.317 340.284Z" fill="white"/>
                            <path id="Vector_4" d="M197.767 555.103C261.333 572.339 317.54 606.067 377.126 632.525C376.514 633.359 375.903 634.194 375.281 635.029C373.767 634.355 372.264 633.681 370.761 632.997C339.952 619.049 310.087 603.231 279.412 589.022C248.116 574.521 215.939 562.202 182.176 554.288C135.505 543.383 87.2946 540.056 39.503 544.443C39.3886 543.437 39.2853 542.422 39.1917 541.416C92.468 536.538 146.215 541.176 197.767 555.103Z" fill="white"/>
                            <path id="Vector_5" d="M768.476 120.708C765.819 120.916 763.158 120.355 760.83 119.095C758.502 117.836 756.612 115.936 755.397 113.634C754.183 111.332 753.699 108.733 754.008 106.165C754.316 103.597 755.402 101.175 757.13 99.2057C758.857 97.2365 761.147 95.8084 763.711 95.102C766.275 94.3956 768.998 94.4426 771.534 95.237C774.071 96.0315 776.307 97.5377 777.961 99.5653C779.615 101.593 780.612 104.051 780.826 106.628C781.113 110.084 779.973 113.509 777.657 116.149C775.341 118.79 772.038 120.43 768.476 120.708V120.708ZM768.309 118.704C770.557 118.528 772.701 117.71 774.469 116.352C776.238 114.994 777.552 113.158 778.245 111.076C778.938 108.994 778.979 106.76 778.363 104.655C777.746 102.551 776.501 100.671 774.783 99.2529C773.065 97.8351 770.953 96.9433 768.713 96.6901C766.473 96.437 764.205 96.8339 762.198 97.8308C760.19 98.8276 758.532 100.38 757.434 102.29C756.336 104.201 755.846 106.385 756.027 108.566C756.147 110.014 756.56 111.425 757.243 112.718C757.925 114.011 758.863 115.161 760.004 116.102C761.144 117.044 762.465 117.758 763.89 118.204C765.315 118.651 766.816 118.82 768.309 118.704V118.704Z" fill="#CCCCCC"/>
                            <path id="Vector_6" d="M814.88 87.1643C819.46 87.1643 823.173 83.5624 823.173 79.1194C823.173 74.6763 819.46 71.0745 814.88 71.0745C810.3 71.0745 806.587 74.6763 806.587 79.1194C806.587 83.5624 810.3 87.1643 814.88 87.1643Z" fill="#CCCCCC"/>
                            <path id="Vector_7" d="M855.643 58.0703C858.049 58.0703 860 56.1783 860 53.8444C860 51.5105 858.049 49.6185 855.643 49.6185C853.237 49.6185 851.287 51.5105 851.287 53.8444C851.287 56.1783 853.237 58.0703 855.643 58.0703Z" fill="#CCCCCC"/>
                            <path id="Vector_8" d="M705.154 378.025C703.684 380.182 701.589 381.868 699.131 382.87C696.674 383.871 693.966 384.144 691.349 383.652C688.732 383.161 686.325 381.928 684.43 380.109C682.536 378.29 681.24 375.967 680.707 373.434C680.173 370.901 680.426 368.271 681.433 365.877C682.441 363.483 684.157 361.433 686.366 359.985C688.574 358.538 691.176 357.758 693.841 357.745C696.506 357.732 699.116 358.485 701.34 359.911V359.911C704.318 361.825 706.393 364.807 707.108 368.203C707.823 371.598 707.12 375.131 705.154 378.025V378.025ZM684.396 364.72C683.153 366.545 682.496 368.687 682.507 370.875C682.519 373.062 683.199 375.198 684.462 377.011C685.724 378.823 687.513 380.232 689.601 381.059C691.689 381.886 693.983 382.093 696.192 381.656C698.402 381.218 700.428 380.154 702.015 378.599C703.601 377.044 704.677 375.068 705.105 372.92C705.534 370.772 705.296 368.549 704.423 366.532C703.549 364.515 702.078 362.795 700.197 361.589V361.589C697.672 359.975 694.591 359.398 691.629 359.985C688.667 360.572 686.066 362.275 684.396 364.72V364.72Z" fill="#CCCCCC"/>
                            <path id="Vector_9" d="M721.298 426.103C725.878 426.103 729.591 422.501 729.591 418.058C729.591 413.615 725.878 410.013 721.298 410.013C716.718 410.013 713.005 413.615 713.005 418.058C713.005 422.501 716.718 426.103 721.298 426.103Z" fill="#CCCCCC"/>
                            <path id="Vector_10" d="M744.431 463.503C746.837 463.503 748.787 461.611 748.787 459.277C748.787 456.943 746.837 455.051 744.431 455.051C742.025 455.051 740.075 456.943 740.075 459.277C740.075 461.611 742.025 463.503 744.431 463.503Z" fill="#CCCCCC"/>
                            <path id="Vector_11" d="M370.53 158.462C369.343 156.147 368.892 153.542 369.232 150.978C369.571 148.413 370.688 146.004 372.439 144.055C374.19 142.106 376.498 140.704 379.07 140.027C381.643 139.351 384.364 139.429 386.891 140.253C389.417 141.076 391.635 142.608 393.264 144.655C394.893 146.701 395.86 149.17 396.043 151.75C396.225 154.329 395.615 156.903 394.289 159.147C392.964 161.39 390.982 163.201 388.595 164.352V164.352C385.394 165.891 381.694 166.135 378.307 165.031C374.92 163.927 372.123 161.564 370.53 158.462V158.462ZM392.81 147.722C391.806 145.763 390.226 144.136 388.269 143.048C386.313 141.96 384.067 141.459 381.817 141.609C379.567 141.759 377.414 142.552 375.629 143.889C373.844 145.226 372.507 147.047 371.789 149.121C371.07 151.195 371.002 153.429 371.592 155.54C372.183 157.652 373.405 159.546 375.105 160.983C376.806 162.421 378.907 163.337 381.144 163.616C383.381 163.895 385.653 163.524 387.672 162.551C390.378 161.242 392.439 158.947 393.402 156.167C394.365 153.387 394.152 150.35 392.81 147.722Z" fill="#CCCCCC"/>
                            <path id="Vector_12" d="M326.731 159.964C331.312 159.964 335.024 156.362 335.024 151.919C335.024 147.476 331.312 143.874 326.731 143.874C322.151 143.874 318.438 147.476 318.438 151.919C318.438 156.362 322.151 159.964 326.731 159.964Z" fill="#CCCCCC"/>
                            <path id="Vector_13" d="M278.37 154.871C280.776 154.871 282.727 152.979 282.727 150.645C282.727 148.312 280.776 146.42 278.37 146.42C275.964 146.42 274.014 148.312 274.014 150.645C274.014 152.979 275.964 154.871 278.37 154.871Z" fill="#CCCCCC"/>
                            <g id="TweetID">
                            <path id="Vector_14" d="M496.189 492.59L337.211 492.59C335.955 492.588 334.751 491.941 333.862 490.791C332.974 489.641 332.474 488.082 332.473 486.456L332.473 376.53C332.474 374.904 332.974 373.345 333.862 372.195C334.751 371.045 335.955 370.398 337.211 370.396L496.189 370.396C497.446 370.398 498.65 371.045 499.538 372.195C500.426 373.345 500.926 374.904 500.928 376.53L500.928 486.456C500.926 488.082 500.426 489.641 499.538 490.791C498.65 491.941 497.446 492.588 496.189 492.59V492.59Z" fill="#3F3D56"/>
                            <path id="Vector_15" d="M364.364 447.319C374.018 447.319 381.845 437.187 381.845 424.688C381.845 412.188 374.018 402.056 364.364 402.056C354.709 402.056 346.883 412.188 346.883 424.688C346.883 437.187 354.709 447.319 364.364 447.319Z" fill="white"/>
                            <path id="Vector_16" d="M476.928 404.423L405.555 404.423C404.846 404.423 404.166 404.058 403.665 403.409C403.163 402.76 402.882 401.88 402.882 400.962C402.882 400.044 403.163 399.164 403.665 398.515C404.166 397.866 404.846 397.502 405.555 397.502L476.928 397.502C477.637 397.502 478.316 397.866 478.818 398.515C479.319 399.164 479.601 400.044 479.601 400.962C479.601 401.88 479.319 402.76 478.818 403.409C478.316 404.058 477.637 404.423 476.928 404.423V404.423Z" fill="white"/>
                            <path id="Vector_17" d="M439.563 420.242L405.555 420.242C404.846 420.242 404.166 419.877 403.665 419.228C403.163 418.579 402.882 417.699 402.882 416.781C402.882 415.864 403.163 414.983 403.665 414.334C404.166 413.685 404.846 413.321 405.555 413.321L439.563 413.321C440.272 413.321 440.952 413.685 441.453 414.334C441.955 414.983 442.236 415.864 442.236 416.781C442.236 417.699 441.955 418.579 441.453 419.228C440.952 419.877 440.272 420.242 439.563 420.242V420.242Z" fill="white"/>
                            <path id="Vector_18" d="M463.516 436.054L405.555 436.054C404.846 436.054 404.166 435.689 403.665 435.04C403.163 434.391 402.882 433.511 402.882 432.593C402.882 431.676 403.163 430.796 403.665 430.147C404.166 429.498 404.846 429.133 405.555 429.133L463.516 429.133C464.225 429.133 464.905 429.498 465.406 430.147C465.907 430.796 466.189 431.676 466.189 432.593C466.189 433.511 465.907 434.391 465.406 435.04C464.905 435.689 464.225 436.054 463.516 436.054V436.054Z" fill="white"/>
                            <path id="Vector_19" d="M476.928 451.866L405.555 451.866C404.846 451.866 404.166 451.501 403.665 450.852C403.163 450.203 402.882 449.323 402.882 448.406C402.882 447.488 403.163 446.608 403.665 445.959C404.166 445.31 404.846 444.945 405.555 444.945L476.928 444.945C477.637 444.945 478.316 445.31 478.818 445.959C479.319 446.608 479.601 447.488 479.601 448.406C479.601 449.323 479.319 450.203 478.818 450.852C478.316 451.501 477.637 451.866 476.928 451.866V451.866Z" fill="white"/>
                            <path id="Vector_20" d="M474.693 480.473L462.875 480.473C462.23 480.474 461.591 480.311 460.995 479.992C460.398 479.674 459.856 479.206 459.399 478.616C458.943 478.026 458.581 477.325 458.333 476.553C458.086 475.781 457.959 474.954 457.959 474.119C457.959 473.284 458.086 472.456 458.333 471.685C458.581 470.913 458.943 470.212 459.399 469.622C459.856 469.032 460.398 468.564 460.995 468.245C461.591 467.927 462.23 467.763 462.875 467.765L474.693 467.765C475.995 467.765 477.243 468.434 478.163 469.626C479.084 470.817 479.601 472.434 479.601 474.119C479.601 475.804 479.084 477.42 478.163 478.612C477.243 479.804 475.995 480.473 474.693 480.473V480.473Z" fill="white"/>
                            <path id="Vector_21" d="M259.737 502.828L148.734 502.828C147.857 502.827 147.016 502.375 146.396 501.572C145.776 500.769 145.427 499.681 145.426 498.545L145.426 421.792C145.427 420.657 145.776 419.568 146.396 418.765C147.016 417.962 147.857 417.51 148.734 417.509L259.737 417.509C260.614 417.51 261.455 417.962 262.075 418.765C262.695 419.568 263.044 420.657 263.045 421.792L263.045 498.545C263.044 499.681 262.695 500.769 262.075 501.572C261.455 502.375 260.614 502.827 259.737 502.828V502.828Z" fill="#575A89"/>
                            <path id="Vector_22" d="M167.692 471.219C174.433 471.219 179.898 464.144 179.898 455.417C179.898 446.69 174.433 439.615 167.692 439.615C160.951 439.615 155.486 446.69 155.486 455.417C155.486 464.144 160.951 471.219 167.692 471.219Z" fill="white"/>
                            <path id="Vector_23" d="M246.288 441.267L196.453 441.267C195.958 441.267 195.483 441.013 195.134 440.56C194.784 440.106 194.587 439.492 194.587 438.851C194.587 438.21 194.784 437.596 195.134 437.143C195.483 436.69 195.958 436.435 196.453 436.435L246.288 436.435C246.783 436.435 247.257 436.69 247.607 437.143C247.957 437.596 248.154 438.21 248.154 438.851C248.154 439.492 247.957 440.106 247.607 440.56C247.257 441.013 246.783 441.267 246.288 441.267V441.267Z" fill="white"/>
                            <path id="Vector_24" d="M220.199 452.313L196.453 452.313C195.959 452.311 195.485 452.056 195.136 451.603C194.786 451.15 194.59 450.537 194.59 449.897C194.59 449.257 194.786 448.643 195.136 448.19C195.485 447.737 195.959 447.482 196.453 447.48L220.199 447.48C220.693 447.482 221.167 447.737 221.516 448.19C221.865 448.643 222.061 449.257 222.061 449.897C222.061 450.537 221.865 451.15 221.516 451.603C221.167 452.056 220.693 452.311 220.199 452.313V452.313Z" fill="white"/>
                            <path id="Vector_25" d="M236.923 463.353L196.453 463.353C195.959 463.352 195.485 463.097 195.136 462.644C194.786 462.191 194.59 461.577 194.59 460.937C194.59 460.297 194.786 459.683 195.136 459.23C195.485 458.777 195.959 458.522 196.453 458.521L236.923 458.521C237.417 458.522 237.891 458.777 238.24 459.23C238.589 459.683 238.785 460.297 238.785 460.937C238.785 461.577 238.589 462.191 238.24 462.644C237.891 463.097 237.417 463.352 236.923 463.353V463.353Z" fill="white"/>
                            <path id="Vector_26" d="M246.287 474.393L196.453 474.393C195.959 474.392 195.485 474.137 195.136 473.684C194.786 473.231 194.59 472.617 194.59 471.977C194.59 471.337 194.786 470.723 195.136 470.27C195.485 469.818 195.959 469.562 196.453 469.561L246.287 469.561C246.533 469.561 246.776 469.623 247.003 469.744C247.229 469.865 247.436 470.043 247.609 470.267C247.783 470.492 247.921 470.758 248.015 471.052C248.109 471.345 248.157 471.66 248.157 471.977C248.157 472.295 248.109 472.61 248.015 472.903C247.921 473.196 247.783 473.463 247.609 473.687C247.436 473.912 247.229 474.09 247.003 474.211C246.776 474.332 246.533 474.394 246.287 474.393V474.393Z" fill="white"/>
                            <path id="Vector_27" d="M244.727 494.368L236.475 494.368C235.567 494.368 234.695 493.9 234.052 493.068C233.41 492.236 233.049 491.108 233.049 489.931C233.049 488.754 233.41 487.626 234.052 486.794C234.695 485.962 235.567 485.494 236.475 485.494L244.727 485.494C245.636 485.494 246.507 485.962 247.15 486.794C247.793 487.626 248.154 488.754 248.154 489.931C248.154 491.108 247.793 492.236 247.15 493.068C246.507 493.9 245.636 494.368 244.727 494.368Z" fill="white"/>
                            <path id="Vector_28" d="M449.618 621.68L242.047 621.68C240.407 621.678 238.834 620.833 237.674 619.332C236.515 617.83 235.862 615.794 235.86 613.671L235.86 470.146C235.862 468.023 236.515 465.987 237.674 464.485C238.834 462.984 240.407 462.139 242.047 462.137L449.618 462.137C451.258 462.139 452.83 462.984 453.99 464.485C455.15 465.987 455.802 468.023 455.804 470.146L455.804 613.671C455.802 615.794 455.15 617.83 453.99 619.332C452.83 620.833 451.258 621.678 449.618 621.68Z" fill="#4DD3C1"/>
                            <path id="Vector_29" d="M277.498 562.572C290.103 562.572 300.322 549.343 300.322 533.023C300.322 516.703 290.103 503.474 277.498 503.474C264.893 503.474 254.674 516.703 254.674 533.023C254.674 549.343 264.893 562.572 277.498 562.572Z" fill="white"/>
                            </g>
                            <path id="Vector_30" d="M530.674 322L530 322.236L544.705 395H630V394.083H545.241L530.674 322Z" fill="#3F3D56"/>
                            <path id="Vector_31" d="M649.822 395.332C649.274 394.52 649 393.331 649 391.766C649 390.216 649.274 389.035 649.822 388.223C650.104 387.815 650.455 387.494 650.849 387.283C651.243 387.072 651.67 386.977 652.097 387.005C652.528 386.976 652.958 387.071 653.357 387.282C653.755 387.493 654.111 387.814 654.398 388.223C654.951 389.035 655.228 390.216 655.228 391.766C655.228 393.332 654.952 394.52 654.398 395.332C654.111 395.74 653.755 396.062 653.357 396.273C652.958 396.483 652.528 396.578 652.097 396.549C651.67 396.577 651.243 396.482 650.849 396.271C650.455 396.06 650.104 395.739 649.822 395.332ZM653.083 394.07C653.33 393.344 653.437 392.555 653.395 391.766C653.435 390.987 653.325 390.208 653.074 389.495C652.981 389.271 652.84 389.085 652.667 388.959C652.494 388.832 652.296 388.771 652.097 388.782C651.901 388.773 651.707 388.835 651.538 388.961C651.37 389.088 651.233 389.273 651.145 389.495C650.901 390.21 650.794 390.989 650.834 391.766C650.793 392.551 650.9 393.337 651.145 394.059C651.233 394.281 651.369 394.467 651.538 394.593C651.707 394.72 651.901 394.782 652.097 394.772C652.297 394.787 652.496 394.728 652.671 394.604C652.846 394.479 652.989 394.294 653.083 394.07V394.07ZM651.976 402.846L659.104 387.224H661.024L653.879 402.846H651.976ZM658.594 401.782C658.045 400.97 657.771 399.775 657.772 398.195C657.772 396.645 658.046 395.467 658.594 394.662C658.894 394.28 659.252 393.976 659.645 393.769C660.038 393.562 660.46 393.456 660.886 393.456C661.312 393.456 661.733 393.562 662.127 393.769C662.52 393.976 662.877 394.28 663.178 394.662C663.726 395.467 664 396.652 664 398.217C664 399.782 663.726 400.971 663.178 401.782C662.879 402.168 662.522 402.474 662.128 402.683C661.735 402.892 661.313 403 660.886 403C660.459 403 660.037 402.892 659.643 402.683C659.25 402.474 658.893 402.168 658.594 401.782ZM661.854 400.51C662.1 399.787 662.207 399.002 662.166 398.217C662.207 397.438 662.097 396.659 661.846 395.946C661.749 395.73 661.609 395.549 661.44 395.424C661.27 395.299 661.077 395.233 660.881 395.233C660.685 395.233 660.493 395.299 660.323 395.424C660.154 395.549 660.013 395.73 659.917 395.946C659.672 396.661 659.566 397.439 659.605 398.217C659.565 399.002 659.671 399.787 659.917 400.51C660.014 400.726 660.155 400.906 660.325 401.032C660.496 401.157 660.689 401.223 660.886 401.223C661.082 401.223 661.275 401.157 661.446 401.032C661.616 400.906 661.757 400.726 661.854 400.51V400.51Z" fill="#3F3D56"/>
                            <path id="Vector_32" d="M637.769 402.232C636.187 402.232 634.64 401.763 633.325 400.884C632.009 400.005 630.984 398.755 630.378 397.293C629.773 395.831 629.614 394.223 629.923 392.671C630.232 391.119 630.994 389.694 632.112 388.575C633.231 387.456 634.657 386.694 636.209 386.386C637.76 386.077 639.369 386.235 640.831 386.841C642.293 387.446 643.542 388.472 644.421 389.787C645.3 391.103 645.769 392.65 645.769 394.232C645.767 396.353 644.923 398.386 643.423 399.886C641.924 401.386 639.89 402.229 637.769 402.232V402.232ZM637.769 386.994C636.338 386.994 634.938 387.418 633.748 388.214C632.558 389.009 631.63 390.139 631.082 391.462C630.534 392.785 630.391 394.24 630.67 395.644C630.95 397.048 631.639 398.338 632.651 399.35C633.663 400.362 634.953 401.052 636.357 401.331C637.761 401.61 639.217 401.467 640.539 400.919C641.862 400.371 642.992 399.443 643.788 398.253C644.583 397.063 645.007 395.663 645.007 394.232C645.005 392.313 644.242 390.473 642.885 389.116C641.528 387.759 639.688 386.996 637.769 386.994V386.994Z" fill="#3F3D56"/>
                            <path id="Vector_33" d="M637.5 399C639.985 399 642 396.985 642 394.5C642 392.015 639.985 390 637.5 390C635.015 390 633 392.015 633 394.5C633 396.985 635.015 399 637.5 399Z" fill="#00BFA6"/>
                            </g>
                            <path id="Vector_34" d="M972.796 334.142C973.638 333.859 974.499 333.651 975.369 333.52L1010.14 253.65L999.522 235.66L1021.44 214L1049 252.125L992.876 344.473C994.257 347.965 994.665 351.85 994.045 355.611C993.425 359.372 991.807 362.83 989.407 365.526C987.006 368.222 983.936 370.028 980.606 370.704C977.275 371.379 973.842 370.893 970.762 369.308C967.682 367.724 965.102 365.117 963.364 361.834C961.627 358.551 960.815 354.748 961.036 350.931C961.256 347.113 962.5 343.462 964.601 340.463C966.702 337.465 969.56 335.26 972.796 334.142V334.142Z" fill="#FFB9B9"/>
                            <path id="Vector_35" d="M1033.03 223.657C1032.55 224.21 1032 224.685 1031.39 225.067L995.383 247.931C994.518 248.481 993.558 248.828 992.563 248.95C991.569 249.073 990.563 248.968 989.607 248.642C988.652 248.317 987.769 247.778 987.013 247.059C986.258 246.34 985.647 245.458 985.219 244.467L967.705 203.94C966.96 202.234 966.799 200.292 967.253 198.468C967.706 196.644 968.744 195.059 970.176 194.003L992.498 177.371C993.892 176.333 995.573 175.861 997.251 176.036C998.929 176.21 1000.5 177.021 1001.69 178.328L1032.89 212.622C1034.22 214.081 1034.97 216.049 1035 218.109C1035.02 220.169 1034.32 222.158 1033.03 223.657H1033.03Z" fill="#D0CDE1"/>
                            <path id="Vector_36" d="M1083 684.267L1063.99 690L1035 611.462L1063.05 603L1083 684.267Z" fill="#FFB9B9"/>
                            <path id="Vector_37" d="M1048.51 688.285L1084.73 677.065L1090.93 703.03L1031.91 721.315C1031.09 717.905 1030.88 714.346 1031.27 710.841C1031.66 707.336 1032.66 703.953 1034.2 700.886C1035.74 697.819 1037.8 695.127 1040.25 692.965C1042.71 690.803 1045.51 689.213 1048.51 688.285V688.285Z" fill="#2F2E41"/>
                            <path id="Vector_38" d="M921.997 700L902.349 699.998L893 616L922 616.002L921.997 700Z" fill="#FFB9B9"/>
                            <path id="Vector_39" d="M887.568 693H925V722H864C864 718.192 864.61 714.421 865.794 710.902C866.978 707.384 868.714 704.187 870.903 701.494C873.091 698.801 875.69 696.665 878.549 695.207C881.408 693.75 884.473 693 887.568 693Z" fill="#2F2E41"/>
                            <path id="Vector_40" d="M920.426 640H893.855C892.039 639.996 890.292 639.205 888.968 637.786C887.644 636.367 886.842 634.427 886.725 632.359C878.808 488.753 883.439 385.741 901.3 308.177C901.378 307.838 901.475 307.504 901.589 307.178L903.012 303.119C903.538 301.605 904.452 300.307 905.634 299.394C906.816 298.48 908.212 297.995 909.639 298H964.28C965.309 297.999 966.327 298.253 967.262 298.744C968.198 299.235 969.029 299.951 969.698 300.843L977.12 310.723C977.265 310.916 977.4 311.112 977.531 311.319C1011 364.565 1040.99 468.664 1075.72 608.584C1076.24 610.618 1076.03 612.799 1075.16 614.664C1074.28 616.529 1072.8 617.929 1071.03 618.567L1042.48 628.993C1040.84 629.582 1039.07 629.48 1037.49 628.705C1035.91 627.931 1034.62 626.535 1033.87 624.773L959.77 449.417C959.252 448.191 958.401 447.189 957.345 446.558C956.288 445.927 955.082 445.7 953.904 445.913C952.726 446.125 951.639 446.765 950.804 447.737C949.97 448.709 949.432 449.961 949.27 451.31L927.498 632.96C927.259 634.908 926.412 636.692 925.113 637.985C923.814 639.278 922.15 639.993 920.426 640V640Z" fill="#2F2E41"/>
                            <path id="Vector_41" d="M973.959 313C973.886 313 973.813 312.998 973.739 312.996L908.524 310.585C906.847 310.53 905.244 309.771 904.005 308.446C902.767 307.121 901.977 305.319 901.779 303.368C893.511 224.996 916.184 204 926.316 198.612C927.163 198.164 927.896 197.468 928.446 196.591C928.995 195.714 929.342 194.686 929.452 193.605L930.328 185.391C930.478 183.94 930.956 182.563 931.714 181.402C947.599 157.301 969.29 149.584 980.807 147.129C981.741 146.933 982.699 146.961 983.623 147.211C984.548 147.462 985.419 147.93 986.185 148.587C986.95 149.244 987.594 150.076 988.076 151.034C988.558 151.991 988.869 153.053 988.99 154.155L990.303 165.951C990.437 167.076 990.82 168.14 991.415 169.038C1024.54 219.761 987.637 294.654 979.901 309.152C979.269 310.329 978.393 311.3 977.354 311.972C976.315 312.645 975.147 312.999 973.959 313Z" fill="#D0CDE1"/>
                            <g id="HeadID">
                            <path id="Vector_42" d="M935.739 143.615C956.743 147.752 976.815 131.183 980.572 106.606C984.329 82.0291 970.348 58.7517 949.344 54.6143C928.34 50.4768 908.268 67.0462 904.511 91.6229C900.754 116.2 914.736 139.477 935.739 143.615Z" fill="#FFB9B9"/>
                            <path id="Vector_43" d="M1018.54 119.947C1012.09 104.487 1003.71 90.1843 993.662 77.4875C985.308 66.9368 975.666 57.4297 964.323 51.5561C952.979 45.6824 939.764 43.6987 927.915 48.1534C916.065 52.6079 902.855 63.4941 900.639 77.5235C899.928 82.0306 899.999 88.3317 904.002 88.3164L905.1 88.7082C914.801 88.3894 924.502 88.0705 934.203 87.7516C935.773 104.379 937.343 121.006 938.912 137.633C939.243 141.137 939.8 145.093 942.354 147.063C944.759 148.918 947.969 148.249 950.802 147.508C951.268 147.386 956.464 138.541 956.464 138.541C956.603 138.26 956.805 138.027 957.05 137.865C957.294 137.703 957.572 137.618 957.854 137.619C958.136 137.621 958.412 137.708 958.655 137.873C958.897 138.038 959.096 138.273 959.232 138.556L960.964 142.161C961.295 142.85 961.813 143.396 962.441 143.718C963.068 144.039 963.771 144.118 964.442 143.943C980.838 139.657 997.235 135.371 1013.63 131.085C1015.9 130.493 1018.46 129.641 1019.46 127.24C1020.41 124.939 1019.49 122.241 1018.54 119.947Z" fill="#2F2E41"/>
                            </g>
                            <path id="Vector_44" d="M1199.41 723H721.587C721.166 723 720.763 722.737 720.465 722.268C720.167 721.799 720 721.163 720 720.5C720 719.837 720.167 719.201 720.465 718.732C720.763 718.263 721.166 718 721.587 718H1199.41C1199.83 718 1200.24 718.263 1200.54 718.732C1200.83 719.201 1201 719.837 1201 720.5C1201 721.163 1200.83 721.799 1200.54 722.268C1200.24 722.737 1199.83 723 1199.41 723Z" fill="#3F3D56"/>
                            <path id="HandID" d="M751.245 229.236C752.41 231.466 754.089 233.384 756.164 234.857C758.239 236.33 760.659 237.32 763.254 237.759C765.849 238.197 768.556 238.073 771.184 237.395C773.812 236.717 776.297 235.502 778.465 233.835L934.221 259.7L935.201 221.387L781.923 207.894C779.044 204.773 774.994 202.869 770.54 202.542C766.086 202.214 761.537 203.486 757.756 206.117C753.974 208.748 751.223 212.554 750.023 216.815C748.823 221.076 749.258 225.495 751.245 229.236Z" fill="#FFB9B9"/>
                            <path id="Vector_45" d="M938.18 258.395C937.818 257.717 937.54 256.985 937.354 256.222L926.213 210.694C925.945 209.599 925.874 208.461 926.004 207.352C926.134 206.243 926.462 205.186 926.968 204.249C927.474 203.312 928.147 202.514 928.944 201.907C929.74 201.3 930.644 200.897 931.597 200.722L970.595 193.571C972.238 193.261 973.946 193.652 975.407 194.671C976.869 195.691 977.986 197.271 978.556 199.124L987.577 228.061C988.139 229.867 988.148 231.82 987.6 233.581C987.053 235.342 985.984 236.802 984.579 237.708L947.703 261.45C946.134 262.46 944.262 262.706 942.485 262.136C940.708 261.565 939.164 260.224 938.18 258.395L938.18 258.395Z" fill="#D0CDE1"/>
                            <path id="Vector_46" d="M761.822 8.33152C761.274 7.51979 761 6.33138 761 4.76627C761 3.2159 761.274 2.03468 761.822 1.22263C762.104 0.815238 762.455 0.49409 762.849 0.283219C763.243 0.0723484 763.67 -0.0227773 764.097 0.00496401C764.528 -0.0235514 764.958 0.0710566 765.357 0.281812C765.755 0.492568 766.111 0.814085 766.398 1.22263C766.951 2.03455 767.228 3.21577 767.228 4.76627C767.228 6.33157 766.952 7.51998 766.398 8.33152C766.111 8.74013 765.755 9.06171 765.357 9.27251C764.958 9.4833 764.528 9.57792 764.097 9.5494C763.67 9.57715 763.243 9.48201 762.849 9.2711C762.455 9.06019 762.104 8.73898 761.822 8.33152ZM765.083 7.07003C765.33 6.34449 765.437 5.55467 765.395 4.76627C765.435 3.98746 765.325 3.20785 765.074 2.49523C764.981 2.27099 764.84 2.08486 764.667 1.9586C764.494 1.83235 764.296 1.77117 764.097 1.78222C763.901 1.77252 763.707 1.83462 763.538 1.96108C763.37 2.08753 763.233 2.27299 763.145 2.49523C762.901 3.21012 762.794 3.98861 762.834 4.76627C762.793 5.55101 762.9 6.33679 763.145 7.05893C763.233 7.28127 763.369 7.46683 763.538 7.59333C763.707 7.71983 763.901 7.78192 764.097 7.77214C764.297 7.78668 764.496 7.72829 764.671 7.60388C764.846 7.47947 764.989 7.29424 765.083 7.07003V7.07003ZM763.976 15.8464L771.104 0.224381H773.024L765.879 15.8464H763.976ZM770.594 14.7823C770.045 13.9704 769.771 12.7746 769.772 11.1949C769.772 9.64469 770.046 8.46716 770.594 7.66232C770.894 7.27986 771.252 6.97641 771.645 6.76936C772.038 6.56231 772.46 6.45573 772.886 6.45573C773.312 6.45573 773.733 6.56231 774.127 6.76936C774.52 6.97641 774.877 7.27986 775.178 7.66232C775.726 8.46696 776 9.65182 776 11.2169C776 12.7822 775.726 13.9707 775.178 14.7823C774.879 15.168 774.522 15.4742 774.128 15.6833C773.735 15.8923 773.313 16 772.886 16C772.459 16 772.037 15.8923 771.643 15.6833C771.25 15.4742 770.893 15.168 770.594 14.7823ZM773.854 13.5097C774.1 12.7875 774.207 12.0017 774.166 11.2169C774.207 10.4382 774.097 9.65865 773.846 8.94601C773.749 8.72952 773.609 8.54943 773.44 8.42413C773.27 8.29883 773.077 8.2328 772.881 8.2328C772.685 8.2328 772.493 8.29883 772.323 8.42413C772.154 8.54943 772.013 8.72952 771.917 8.94601C771.672 9.66091 771.566 10.4393 771.605 11.2169C771.565 12.0016 771.671 12.7874 771.917 13.5097C772.014 13.7263 772.155 13.9063 772.325 14.0316C772.496 14.1568 772.689 14.2227 772.886 14.2227C773.082 14.2227 773.275 14.1568 773.446 14.0316C773.616 13.9063 773.757 13.7263 773.854 13.5097V13.5097Z" fill="#3F3D56"/>
                            <path id="Vector_47" d="M661.532 61L661 60.8289L672.617 8H740V8.66595H673.04L661.532 61Z" fill="#3F3D56"/>
                            <path id="Vector_48" d="M748 16C746.418 16 744.871 15.5308 743.555 14.6518C742.24 13.7727 741.214 12.5233 740.609 11.0615C740.003 9.59966 739.845 7.99113 740.154 6.43928C740.462 4.88743 741.224 3.46197 742.343 2.34315C743.462 1.22433 744.887 0.462404 746.439 0.153722C747.991 -0.15496 749.6 0.00346528 751.061 0.608966C752.523 1.21447 753.773 2.23984 754.652 3.55544C755.531 4.87103 756 6.41775 756 8C755.998 10.121 755.154 12.1544 753.654 13.6542C752.154 15.154 750.121 15.9976 748 16V16ZM748 0.761929C746.568 0.761925 745.169 1.18643 743.979 1.98176C742.788 2.77709 741.861 3.90752 741.313 5.23011C740.765 6.55269 740.622 8.00804 740.901 9.41209C741.18 10.8161 741.87 12.1058 742.882 13.1181C743.894 14.1304 745.184 14.8197 746.588 15.099C747.992 15.3783 749.447 15.235 750.77 14.6871C752.092 14.1393 753.223 13.2116 754.018 12.0213C754.814 10.831 755.238 9.43158 755.238 8.00002C755.236 6.08103 754.473 4.24126 753.116 2.88433C751.759 1.52739 749.919 0.764113 748 0.761929V0.761929Z" fill="#3F3D56"/>
                            <path id="Vector_49" d="M748.5 13C750.985 13 753 10.9853 753 8.49999C753 6.01471 750.985 4 748.5 4C746.015 4 744 6.01471 744 8.49999C744 10.9853 746.015 13 748.5 13Z" fill="#00BFA6"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="860" height="677" fill="white" transform="translate(0 46)"/>
                            </clipPath>
                            </defs>
                        </svg>



                    </div>
                </div>
            </section>
            </>
        )
    }
}

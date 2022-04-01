// 영화 추천 슬라이드
let slideWrap = document.querySelector('recommendWrap');	// 슬라이더
let recommendImgWrap = document.querySelector('.recommendImgWrap'); // 이미지들을 감싸고 있는 부분
let slideImg = document.querySelectorAll('.recommendPoster');	// 이미지
let slideCount = slideImg.length; 						// 슬라이드 이미지 갯수
let controlBtn = document.querySelector('.control');
let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');
let currentIndex = 0; 	// 현재 위치
let slideMove = true; 	// 동작 체크
let timer;				// setInterval 조절

// 이벤트 슬라이드
let eventSlideWrap = document.querySelector('.eventSlideWrap');
let eventImgWrap = document.querySelector('.eventImgWrap');
let eventPrevBtn = document.querySelector('.eventPrevBtn');
let eventNextBtn = document.querySelector('.eventNextBtn');
let eventImg = document.querySelectorAll('.eventImg');
let eventImgWrapWidth = 0;
let eventIndex = 0;

// 영화 차트
let chartPoster = document.querySelectorAll('.chartPoster');
let chartBtn = document.querySelectorAll('.chartBtn');

control(slideMove);		// 슬라이드 재생
setEventSlideSize();	// 이벤트 슬라이드 사이즈

// 슬라이드 재생, 일시정지
function control(movement){
	if(movement == true){
		slideMove = false;
		timer = setInterval(function(){
			nextBtn.click();
		}, 4000)
		controlBtn.innerHTML = '일시정지';
	} else {
		slideMove = true;
		clearInterval(timer);
		controlBtn.innerHTML = '재생하기';
	}
}
// 다음
nextBtn.onclick = function(){
	currentIndex++;
	recommendImgWrap.style.transform = "rotateX(-14deg) rotateY(" + -currentIndex*36 + "deg)";
	console.log(currentIndex);
}
// 이전
prevBtn.onclick = function(){
	currentIndex--;
	recommendImgWrap.style.transform = "rotateX(-14deg) rotateY(" + -currentIndex*36 + "deg)";
	console.log(currentIndex);
}
// 일시정지 , 재생
controlBtn.onclick = function(){
	control(slideMove);		
}

// 이벤트 슬라이드 사이즈 구하기
function setEventSlideSize(){
	for(let i = 0; i < eventImg.length; i++){
		eventImgWrapWidth += eventImg[i].offsetWidth + 40;
	}
	eventImgWrap.style.width = eventImgWrapWidth + 'px';
}

eventPrevBtn.onclick = function(){
	eventIndex--;
	eventImgWrap.style.transform = "translateX("+ -425 * eventIndex +"px)";
	if(eventIndex == 0){
		eventPrevBtn.style.visibility = 'hidden';
	} else {
		eventNextBtn.style.visibility = 'visible';
	}
}

eventNextBtn.onclick = function(){
	eventIndex++;
	eventImgWrap.style.transform = "translateX(" + -425 * eventIndex +"px)";
	if(eventIndex == (eventImg.length-3)){
		eventNextBtn.style.visibility = 'hidden';
	} else {
		eventPrevBtn.style.visibility = 'visible';
	}
}


// 차트 이미지에 마우스 올렸을 때
function rankmouseOn(rankIndex){
	chartPoster[rankIndex].style.opacity = 0.3;
	chartBtn[rankIndex].style.opacity = 1;
	chartBtn[rankIndex].style.cursor = 'pointer';
}

function rankmouseOut(rankIndex){
	chartPoster[rankIndex].style.opacity = 1;
	chartBtn[rankIndex].style.opacity = 0;
	chartBtn[rankIndex].style.cursor = 'default';	
}

(()=>{"use strict";function e(e){const n=document.createElement("p");return n.textContent=e,n}function n(e){const n=document.createElement("button");return n.id=e.toLowerCase(),n.classList.add("navbarButton"),n.textContent=e,n}console.log("pooo");const t=document.querySelector("#content"),o=document.querySelectorAll(".navbarButton");t.appendChild(function(){const e=document.createElement("nav");return e.id="navbar",e.appendChild(n("Home")),e.appendChild(n("Contact")),e.appendChild(n("Menu")),e}()),t.appendChild(function(){const n=document.createElement("div");return n.appendChild(e("Chicken Adobo: $14")),n.appendChild(e("Chicken Nilaga: $15")),n.appendChild(e("Pork Adobo: $16")),n.appendChild(e("Fresh Fruit: $21")),n}());for(let e=0;e<o.length;e++)o[e].addEventListener("click",(function(){alert("Button Clicked")}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBV0EsU0FBU0EsRUFBZ0JDLEdBQ3ZCLE1BQU1DLEVBQVlDLFNBQVNDLGNBQWMsS0FHekMsT0FGQUYsRUFBVUcsWUFBY0osRUFFakJDLEVDSlQsU0FBU0ksRUFBVUMsR0FDakIsTUFBTUMsRUFBU0wsU0FBU0MsY0FBYyxVQUl0QyxPQUhBSSxFQUFPQyxHQUFLRixFQUFPRyxjQUNuQkYsRUFBT0csVUFBVUMsSUFBSSxnQkFDckJKLEVBQU9ILFlBQWNFLEVBQ2RDLEVDWFRLLFFBQVFDLElBQUksUUFDWixNQUFNQyxFQUFVWixTQUFTYSxjQUFjLFlBQ2pDQyxFQUFnQmQsU0FBU2UsaUJBQWlCLGlCQUVoREgsRUFBUUksWURSUixXQUNFLE1BQU1DLEVBQVNqQixTQUFTQyxjQUFjLE9BTXRDLE9BTEFnQixFQUFPWCxHQUFLLFNBRVpXLEVBQU9ELFlBQVliLEVBQVUsU0FDN0JjLEVBQU9ELFlBQVliLEVBQVUsWUFDN0JjLEVBQU9ELFlBQVliLEVBQVUsU0FDdEJjLEVDQ1csSUFDcEJMLEVBQVFJLFlGVlIsV0FDRSxNQUFNRSxFQUFPbEIsU0FBU0MsY0FBYyxPQU9wQyxPQUxBaUIsRUFBS0YsWUFBWW5CLEVBQWdCLHVCQUNqQ3FCLEVBQUtGLFlBQVluQixFQUFnQix3QkFDakNxQixFQUFLRixZQUFZbkIsRUFBZ0Isb0JBQ2pDcUIsRUFBS0YsWUFBWW5CLEVBQWdCLHFCQUUxQnFCLEVFRVdBLElBR3BCLElBQUssSUFBSUMsRUFBSSxFQUFHQSxFQUFJTCxFQUFjTSxPQUFRRCxJQUN4Q0wsRUFBY0ssR0FBR0UsaUJBQWlCLFNBQVMsV0FDckNDLE1BQU0sc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBtZW51UGFnZSgpe1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gXG4gIG1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKCdDaGlja2VuIEFkb2JvOiAkMTQnKSlcbiAgbWVudS5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoJ0NoaWNrZW4gTmlsYWdhOiAkMTUnKSlcbiAgbWVudS5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoJ1BvcmsgQWRvYm86ICQxNicpKVxuICBtZW51LmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaCgnRnJlc2ggRnJ1aXQ6ICQyMScpKVxuXG4gIHJldHVybiBtZW51XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhcmFncmFwaCh0ZXh0KXtcbiAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IHRleHRcblxuICByZXR1cm4gcGFyYWdyYXBoXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVQYWdlXG4iLCIvLyBDcmVhdGUgTmF2IGJhciBpbiBpbmRleC5qcyBmaWxlIHNvIHRoYXQgaXQgcmVtYWlucyBpbiBhbGwgcGFnZXNcbmZ1bmN0aW9uIG5hdkJhcigpe1xuICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxuICBuYXZiYXIuaWQgPSAnbmF2YmFyJztcblxuICBuYXZiYXIuYXBwZW5kQ2hpbGQobmF2QnV0dG9uKCdIb21lJykpXG4gIG5hdmJhci5hcHBlbmRDaGlsZChuYXZCdXR0b24oJ0NvbnRhY3QnKSkgIFxuICBuYXZiYXIuYXBwZW5kQ2hpbGQobmF2QnV0dG9uKCdNZW51JykpXG4gIHJldHVybiBuYXZiYXI7XG59XG5cbmZ1bmN0aW9uIG5hdkJ1dHRvbihpZE5hbWUpe1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBidXR0b24uaWQgPSBpZE5hbWUudG9Mb3dlckNhc2UoKTsgLy8gaWQgaXMgbG93ZXJjYXNlXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXZiYXJCdXR0b24nKVxuICBidXR0b24udGV4dENvbnRlbnQgPSBpZE5hbWU7XG4gIHJldHVybiBidXR0b247XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5hdkJhclxuIiwiaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSAnLi9wYWdlTG9hZC5qcyc7XG5pbXBvcnQgY29udGFjdFBhZ2UgZnJvbSAnLi9jb250YWN0LmpzJztcbmltcG9ydCBtZW51UGFnZSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IG5hdkJhciBmcm9tICcuL05hdmJhci5qcyc7XG5cbmNvbnNvbGUubG9nKCdwb29vJyk7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmNvbnN0IG5hdmlnYXRpb25CYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2YmFyQnV0dG9uJyk7XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2QmFyKCkpO1xuY29udGVudC5hcHBlbmRDaGlsZChtZW51UGFnZSgpKTtcblxuXG5mb3IgKGxldCBpID0gMDsgaSA8IG5hdmlnYXRpb25CYXIubGVuZ3RoOyBpKyspIHtcbiAgbmF2aWdhdGlvbkJhcltpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGFsZXJ0KFwiQnV0dG9uIENsaWNrZWRcIik7XG4gIH0pO1xufVxuXG4iXSwibmFtZXMiOlsiY3JlYXRlUGFyYWdyYXBoIiwidGV4dCIsInBhcmFncmFwaCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwibmF2QnV0dG9uIiwiaWROYW1lIiwiYnV0dG9uIiwiaWQiLCJ0b0xvd2VyQ2FzZSIsImNsYXNzTGlzdCIsImFkZCIsImNvbnNvbGUiLCJsb2ciLCJjb250ZW50IiwicXVlcnlTZWxlY3RvciIsIm5hdmlnYXRpb25CYXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYXBwZW5kQ2hpbGQiLCJuYXZiYXIiLCJtZW51IiwiaSIsImxlbmd0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhbGVydCJdLCJzb3VyY2VSb290IjoiIn0=
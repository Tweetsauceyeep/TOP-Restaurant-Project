(()=>{"use strict";function e(){const e=document.createElement("div"),t=document.createElement("h1");t.textContent="generic restaurant",e.classList.add("page");let n=document.createElement("img");n.src="https://static5.depositphotos.com/1003434/514/i/950/depositphotos_5147838-stock-photo-attractive-smiling-cook.jpg",n.alt="chef do be smiling doe";let o=document.createElement("p");return o.textContent="hiiii guys welcome to my vlog",e.appendChild(t),e.appendChild(n),e.appendChild(o),e}function t(e){const t=document.createElement("p");return t.textContent=e,t}function n(e){const t=document.createElement("button");return t.id=e.toLowerCase(),t.classList.add("navbarButton"),t.textContent=e,t}const o=function(){const e=document.createElement("nav");return e.id="navbar",e.appendChild(n("Home")),e.appendChild(n("Contact")),e.appendChild(n("Menu")),e},d=document.querySelector("#content"),i=document.getElementsByClassName("navbarButton");function c(){for(;d.firstChild;)d.removeChild(d.firstChild)}function a(n){"home"===n.id?(console.log("home was switched to"),c(),d.appendChild(o()),d.appendChild(e())):"menu"===n.id?(console.log("menu was switched to"),c(),d.appendChild(o()),d.appendChild(function(){const e=document.createElement("div");return e.classList.add("page"),e.appendChild(t("Chicken Adobo: $14")),e.appendChild(t("Chicken Nilaga: $15")),e.appendChild(t("Pork Adobo: $16")),e.appendChild(t("Fresh Fruit: $21")),e}())):"contact"===n.id&&(console.log("contact was switched to"),c(),d.appendChild(o()),d.appendChild(function(){const e=document.createElement("div");e.classList.add("page");const t=document.createElement("div");return t.textContent="Contact us at 0502211692",e.appendChild(t),e}()))}d.appendChild(o()),d.appendChild(e()),function e(){for(let t=0;t<i.length;t++)i.item(t).addEventListener("click",(function(){console.log(i.item(t).id),a(i.item(t)),e()}))}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQWUsU0FBU0EsSUFDdEIsTUFBTUMsRUFBUUMsU0FBU0MsY0FBYyxPQUMvQkMsRUFBU0YsU0FBU0MsY0FBYyxNQUN0Q0MsRUFBT0MsWUFBYyxxQkFDckJKLEVBQUtLLFVBQVVDLElBQUksUUFDbkIsSUFBSUMsRUFBUU4sU0FBU0MsY0FBYyxPQUNuQ0ssRUFBTUMsSUFBTSxvSEFDWkQsRUFBTUUsSUFBTSx5QkFFWixJQUFJQyxFQUFZVCxTQUFTQyxjQUFjLEtBT3ZDLE9BTkFRLEVBQVVOLFlBQWMsZ0NBRXhCSixFQUFLVyxZQUFZUixHQUNqQkgsRUFBS1csWUFBWUosR0FDakJQLEVBQUtXLFlBQVlELEdBRVZWLEVDTFQsU0FBU1ksRUFBZ0JDLEdBQ3ZCLE1BQU1ILEVBQVlULFNBQVNDLGNBQWMsS0FHekMsT0FGQVEsRUFBVU4sWUFBY1MsRUFFakJILEVDSlQsU0FBU0ksRUFBVUMsR0FDakIsTUFBTUMsRUFBU2YsU0FBU0MsY0FBYyxVQUl0QyxPQUhBYyxFQUFPQyxHQUFLRixFQUFPRyxjQUNuQkYsRUFBT1gsVUFBVUMsSUFBSSxnQkFDckJVLEVBQU9aLFlBQWNXLEVBQ2RDLEVBR1QsUUFsQkEsV0FDRSxNQUFNRyxFQUFTbEIsU0FBU0MsY0FBYyxPQU10QyxPQUxBaUIsRUFBT0YsR0FBSyxTQUVaRSxFQUFPUixZQUFZRyxFQUFVLFNBQzdCSyxFQUFPUixZQUFZRyxFQUFVLFlBQzdCSyxFQUFPUixZQUFZRyxFQUFVLFNBQ3RCSyxHQ0hIQyxFQUFVbkIsU0FBU29CLGNBQWMsWUFDakNDLEVBQWdCckIsU0FBU3NCLHVCQUF1QixnQkFLdEQsU0FBU0MsSUFDUCxLQUFPSixFQUFRSyxZQUNiTCxFQUFRTSxZQUFZTixFQUFRSyxZQUloQyxTQUFTRSxFQUFhQyxHQUNILFNBQWJBLEVBQU1YLElBQ1JZLFFBQVFDLElBQUksd0JBQ1pOLElBQ0FKLEVBQVFULFlBQVksS0FDcEJTLEVBQVFULFlBQVlaLE1BQ0UsU0FBYjZCLEVBQU1YLElBQ2ZZLFFBQVFDLElBQUksd0JBQ1pOLElBQ0FKLEVBQVFULFlBQVksS0FDcEJTLEVBQVFULFlGM0JaLFdBQ0UsTUFBTW9CLEVBQU85QixTQUFTQyxjQUFjLE9BT3BDLE9BTkE2QixFQUFLMUIsVUFBVUMsSUFBSSxRQUNuQnlCLEVBQUtwQixZQUFZQyxFQUFnQix1QkFDakNtQixFQUFLcEIsWUFBWUMsRUFBZ0Isd0JBQ2pDbUIsRUFBS3BCLFlBQVlDLEVBQWdCLG9CQUNqQ21CLEVBQUtwQixZQUFZQyxFQUFnQixxQkFFMUJtQixFRW1CZUEsS0FDRSxZQUFiSCxFQUFNWCxLQUNmWSxRQUFRQyxJQUFJLDJCQUNaTixJQUNBSixFQUFRVCxZQUFZLEtBQ3BCUyxFQUFRVCxZQ2hDRyxXQUNiLE1BQU1xQixFQUFVL0IsU0FBU0MsY0FBYyxPQUN2QzhCLEVBQVEzQixVQUFVQyxJQUFJLFFBQ3RCLE1BQU0yQixFQUFjaEMsU0FBU0MsY0FBYyxPQUkzQyxPQUhBK0IsRUFBWTdCLFlBQWMsMkJBRTFCNEIsRUFBUXJCLFlBQVlzQixHQUNiRCxFRHlCZUUsS0F4QnhCZCxFQUFRVCxZQUFZLEtBQ3BCUyxFQUFRVCxZQUFZWixLQTJCcEIsU0FBU29DLElBQ1AsSUFBSyxJQUFJQyxFQUFJLEVBQUdBLEVBQUlkLEVBQWNlLE9BQVFELElBQ3hDZCxFQUFjZ0IsS0FBS0YsR0FBR0csaUJBQWlCLFNBQVMsV0FDOUNWLFFBQVFDLElBQUlSLEVBQWNnQixLQUFLRixHQUFHbkIsSUFDbENVLEVBQWFMLEVBQWNnQixLQUFLRixJQUNoQ0QsT0FLTkEsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvTmF2YmFyLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9jb250YWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhvbWUoKXtcbiAgY29uc3QgaG9tZSA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gIGhlYWRlci50ZXh0Q29udGVudCA9ICdnZW5lcmljIHJlc3RhdXJhbnQnXG4gIGhvbWUuY2xhc3NMaXN0LmFkZCgncGFnZScpICBcbiAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgaW1hZ2Uuc3JjID0gXCJodHRwczovL3N0YXRpYzUuZGVwb3NpdHBob3Rvcy5jb20vMTAwMzQzNC81MTQvaS85NTAvZGVwb3NpdHBob3Rvc181MTQ3ODM4LXN0b2NrLXBob3RvLWF0dHJhY3RpdmUtc21pbGluZy1jb29rLmpwZ1wiXG4gIGltYWdlLmFsdCA9ICdjaGVmIGRvIGJlIHNtaWxpbmcgZG9lJ1xuXG4gIGxldCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ2hpaWlpIGd1eXMgd2VsY29tZSB0byBteSB2bG9nJztcblxuICBob21lLmFwcGVuZENoaWxkKGhlYWRlcilcbiAgaG9tZS5hcHBlbmRDaGlsZChpbWFnZSlcbiAgaG9tZS5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpXG5cbiAgcmV0dXJuIGhvbWVcbn1cblxuIiwiZnVuY3Rpb24gbWVudVBhZ2UoKXtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoJ3BhZ2UnKSBcbiAgbWVudS5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoJ0NoaWNrZW4gQWRvYm86ICQxNCcpKVxuICBtZW51LmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaCgnQ2hpY2tlbiBOaWxhZ2E6ICQxNScpKVxuICBtZW51LmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaCgnUG9yayBBZG9ibzogJDE2JykpXG4gIG1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKCdGcmVzaCBGcnVpdDogJDIxJykpXG5cbiAgcmV0dXJuIG1lbnVcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGFyYWdyYXBoKHRleHQpe1xuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGV4dFxuXG4gIHJldHVybiBwYXJhZ3JhcGhcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVudVBhZ2VcbiIsIi8vIENyZWF0ZSBOYXYgYmFyIGluIGluZGV4LmpzIGZpbGUgc28gdGhhdCBpdCByZW1haW5zIGluIGFsbCBwYWdlc1xuZnVuY3Rpb24gbmF2QmFyKCl7XG4gIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXG4gIG5hdmJhci5pZCA9ICduYXZiYXInO1xuICBcbiAgbmF2YmFyLmFwcGVuZENoaWxkKG5hdkJ1dHRvbignSG9tZScpKVxuICBuYXZiYXIuYXBwZW5kQ2hpbGQobmF2QnV0dG9uKCdDb250YWN0JykpICBcbiAgbmF2YmFyLmFwcGVuZENoaWxkKG5hdkJ1dHRvbignTWVudScpKVxuICByZXR1cm4gbmF2YmFyO1xufVxuXG5mdW5jdGlvbiBuYXZCdXR0b24oaWROYW1lKXtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgYnV0dG9uLmlkID0gaWROYW1lLnRvTG93ZXJDYXNlKCk7IC8vIGlkIGlzIGxvd2VyY2FzZVxuICBidXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2YmFyQnV0dG9uJylcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gaWROYW1lO1xuICByZXR1cm4gYnV0dG9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBuYXZCYXJcbiIsImltcG9ydCBjcmVhdGVIb21lIGZyb20gJy4vcGFnZUxvYWQuanMnO1xuaW1wb3J0IGNvbnRhY3RQYWdlIGZyb20gJy4vY29udGFjdC5qcyc7XG5pbXBvcnQgbWVudVBhZ2UgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBuYXZCYXIgZnJvbSAnLi9OYXZiYXIuanMnO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmNvbnN0IG5hdmlnYXRpb25CYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXZiYXJCdXR0b24nKTtcblxuY29udGVudC5hcHBlbmRDaGlsZChuYXZCYXIoKSk7XG5jb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG5cbmZ1bmN0aW9uIGNoaWxkUmVtb3ZlcigpIHtcbiAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYWdlU3dpdGNoZXIobmF2SWQpIHtcbiAgaWYgKG5hdklkLmlkID09PSAnaG9tZScpIHtcbiAgICBjb25zb2xlLmxvZygnaG9tZSB3YXMgc3dpdGNoZWQgdG8nKTtcbiAgICBjaGlsZFJlbW92ZXIoKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdkJhcigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG4gIH0gZWxzZSBpZiAobmF2SWQuaWQgPT09ICdtZW51Jykge1xuICAgIGNvbnNvbGUubG9nKCdtZW51IHdhcyBzd2l0Y2hlZCB0bycpO1xuICAgIGNoaWxkUmVtb3ZlcigpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2QmFyKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudVBhZ2UoKSk7XG4gIH0gZWxzZSBpZiAobmF2SWQuaWQgPT09ICdjb250YWN0Jykge1xuICAgIGNvbnNvbGUubG9nKCdjb250YWN0IHdhcyBzd2l0Y2hlZCB0bycpO1xuICAgIGNoaWxkUmVtb3ZlcigpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2QmFyKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdFBhZ2UoKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZG9TdHVmZigpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZpZ2F0aW9uQmFyLmxlbmd0aDsgaSsrKSB7XG4gICAgbmF2aWdhdGlvbkJhci5pdGVtKGkpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZyhuYXZpZ2F0aW9uQmFyLml0ZW0oaSkuaWQpO1xuICAgICAgcGFnZVN3aXRjaGVyKG5hdmlnYXRpb25CYXIuaXRlbShpKSk7XG4gICAgICBkb1N0dWZmKCkgLy9SRUNVUlNJT04gQkFCWVxuICAgIH0pO1xuICB9XG59XG5cbmRvU3R1ZmYoKVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdFBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ3BhZ2UnKSAgXG4gIGNvbnN0IGNvbnRhY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29udGFjdEluZm8udGV4dENvbnRlbnQgPSAnQ29udGFjdCB1cyBhdCAwNTAyMjExNjkyJ1xuXG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdEluZm8pXG4gIHJldHVybiBjb250YWN0XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlSG9tZSIsImhvbWUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJoZWFkZXIiLCJ0ZXh0Q29udGVudCIsImNsYXNzTGlzdCIsImFkZCIsImltYWdlIiwic3JjIiwiYWx0IiwicGFyYWdyYXBoIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVQYXJhZ3JhcGgiLCJ0ZXh0IiwibmF2QnV0dG9uIiwiaWROYW1lIiwiYnV0dG9uIiwiaWQiLCJ0b0xvd2VyQ2FzZSIsIm5hdmJhciIsImNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwibmF2aWdhdGlvbkJhciIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjaGlsZFJlbW92ZXIiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJwYWdlU3dpdGNoZXIiLCJuYXZJZCIsImNvbnNvbGUiLCJsb2ciLCJtZW51IiwiY29udGFjdCIsImNvbnRhY3RJbmZvIiwiY29udGFjdFBhZ2UiLCJkb1N0dWZmIiwiaSIsImxlbmd0aCIsIml0ZW0iLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==
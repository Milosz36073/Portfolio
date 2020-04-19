import Highway from '@dogstudio/highway';
import { TimelineLite } from 'gsap';


class Top extends Highway.Transition { in ({ from, to, done }) {
        const tl = new TimelineLite();

        tl.fromTo(to.parentNode.parentNode, 0.5, { overflow: 'hidden', position: 'absolute', top: '-100%', width: '100vw', height: '100vh' }, { top: '0' })
            .fromTo(to, 0.4, { opacity: '0' }, {
                opacity: '1',
                onComplete: function() {
                    done();
                }
            })

    }
    out({ from, to, done }) {
        const tl = new TimelineLite();
        tl.fromTo(to, 0.1, { opacity: '1' }, {
            opacity: '0',
            onComplete: function() {
                from.remove();
                done();
            }
        })
    }
}


export default Top;
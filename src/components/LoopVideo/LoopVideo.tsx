import { Container } from "@mantine/core"

export default function LoopVideo(props: { src: any, id: any, muted: any, autoplay: any, ratio:any, loop:any }) {
        let mutedParam = '';
        if(props.muted){
            mutedParam = 'props.muted';
        }
        let autoplayParam = '';
        if(props.autoplay){
            autoplayParam = 'autoplay';
        }
        let loopParam = '';
        if(props.loop){
            loopParam = 'loop';
        }
        return (
            <div className={`videoContainer ratio-${props.ratio}`} dangerouslySetInnerHTML={{
                __html: `
              <video
                ${mutedParam}
                ${autoplayParam}
                ${loopParam}           
                playsinline
                src="${props.src}"   
                id="${props.id}"
              />`
            }}
            />
        );
    }
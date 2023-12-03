
import React from "react"

export default function PraiseHive(props) {
    React.useEffect(() => {
        const script = document.createElement("script")
        script.src = "https://embed.praisehive.com/js/embed.js"
        script.defer = true
        document.body.appendChild(script)
        return () => {
            document.body.removeChild(script)
        }
    }, [])

    return (
        <div
            className="praisehive-embed"
            id="praisehive-clemim59j001yz90k3biupbjo"
            data-widget-layout="avatars"
        />
    )
}

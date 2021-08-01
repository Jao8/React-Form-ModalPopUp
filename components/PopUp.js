import React, { useState, useEffect } from 'react'
import { Modal, View } from 'react-native'
import { StyleSheet } from 'react-native'
import { white } from 'ansi-colors'

import Svg, { Path } from "react-native-svg"


export function CloseBnt(props){
    return(
        <Svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="-1 -1 11 11" 
            width={props.width} 
            height={props.height}

        >
            
            <Path 
                fill="#5f6368" 
                stroke="#5f6368" 
                strokeLinecap="round" 
                strokeWidth={2}
                d="M0 0l9 9M0 9l9-9" 
            />
        </Svg>
    )
}

function PopUp({visible, children}) {
    const [showModal, setShowModal] = useState(visible)

    const togglePopUp = () => {
        if(visible){
            setShowModal(true)
        }else{
            setShowModal(false)
        }
    }

    useEffect(() => {
        togglePopUp()
    }, [visible])

    return (
        <Modal 
            transparent 
            visible={showModal}

        >
            
            <View style={styles.ModalBackgroud}>
            
                <View style={[styles.ModalContainer]}>
                    {children}
                </View>
            </View>
        </Modal>
    )
}
export default PopUp

const styles = StyleSheet.create({
    ModalBackgroud: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ModalContainer:{
        width: "80%",
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation:20,
    }
  });
import React from 'react';
import { Document, Page, View, Text, Font, StyleSheet, Image } from '@react-pdf/renderer';



const styles = StyleSheet.create({
    coverpage: {
        padding: 20,
        height: '100%',
        backgroundColor: '#f9fbfd',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Oswald',
    },
    coverpage_wrapper: {
        fontSize: 60,
        width: '100%',
        height: '40%',
        backgroundColor: '#d4d3cb',
        color: '#191b0e',
        textTransform: 'uppercase',
        alignItems: 'center',
        justifyContent: 'center',
    },
    coverpage_borderTopLeft: {
        borderLeft: '20px solid #191b0e',
        borderTop: '20px solid #191b0e',
        position: 'absolute',
        top: '40px',
        left: '40px',
        right: '60%',
        bottom: '30%',
    },
    coverpage_borderButtomRight: {
        borderRight: '20px solid #191b0e',
        borderBottom: '20px solid #191b0e',
        position: 'absolute',
        top: '30%',
        left: '60%',
        right: '40px',
        bottom: '40px',
    },

    coverpage_title: {
        margin: 20,
        fontSize: 60,
        fontWeight: 200,
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#191b0e',
        fontFamily: 'Oswald',
    },

    title: {
        margin: 20,
        fontSize: 25,
        textAlign: 'center',
        backgroundColor: '#e4e4e4',
        textTransform: 'uppercase',
        color: '#191b0e',
        fontFamily: 'Oswald',
    },

    row: {
        flexGrow: 1,
        flexDirection: 'row',
        height: '100%',
        backgroundColor: '#f9fbfd',
        alignItems: 'center',
        justifyContent: 'center',
    },

    talentCard: {
        width: '100%',
        height: '40%',
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: "space-between",


        backgroundColor: '#efede3',
    },
});

Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
});

const TalentPdf = ({ talents }) => (
    <Document className="w-full h-full">
        <Page size="A4" className="w-full h-full">
            <View style={styles.coverpage}>
                <View style={styles.coverpage_wrapper}>
                    <View style={styles.coverpage_borderTopLeft}></View>
                    <View style={styles.coverpage_borderButtomRight}></View>
                    <Text style={styles.coverpage_title}>Actors pool</Text>
                </View>
            </View>

            {talents?.map((talent) => (
                <View style={styles.row} key={talent._id}>
                    <View style={styles.talentCard}>
                        <View>
                            <Text style={styles.title}>
                                {talent.firstname} {talent.lastname}
                            </Text>
                            {talent?.gallery?.[0] && <Image src={talent?.gallery?.[0]?.photo} />}

                        </View>
                        {talent?.gallery?.[1] && <Image src={talent?.gallery?.[1]?.photo} />}
                    </View>
                </View>
            ))}
        </Page>
    </Document>
);

export default TalentPdf;

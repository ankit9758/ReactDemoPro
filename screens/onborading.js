import { SafeAreaView, StatusBar, FlatList, View, Dimensions, Text, TouchableOpacity, Image } from 'react-native';
import { white, black, red, green } from '../utils/colors';
import stylesApp from '../utils/styles';
import React, { useRef } from 'react';
const { width, height } = Dimensions.get('window')

const slides = [{
    id: "1",
    title: "First Page ",
    subtitle: "First Page has the value that is one the best thing we have seen in out lifetime you know what i mean ",
    color: '#FF0000'
},
{
    id: "2",
    title: "Second Page ",
    subtitle: "Second Page has the value that is one the best thing we have seen in out lifetime you know what i mean ",
    color: '#00FF00'
},
{
    id: "3",
    title: "Third  Page ",
    subtitle: "Third Page has the value that is one the best thing we have seen in out lifetime you know what i mean ",
    color: '#0000FF'
}];


const Slide = ({ item }) => {
    return (<View style={{ }}>
        {/* <Image source={require("../src/assets/images/background.png")}
            resizeMode='contain' style={{ height: '75%', width: width }} /> */}

        <View style={{ flex: 1, backgroundColor: item.color , height: '70%',width:width}} />
        <Text style={stylesApp.title}>{item.title}</Text>
        <Text style={stylesApp.subTitle}>{item.subtitle}</Text>

    </View>)
};

const OnBoardingScreen = () => {

    // const visibleOItemChnaged=useRef(({visibleItems})=>{

    // })
    // const scrollX=useRef(new Animated.Value(0)).current;

    const [currentIndex, setCurrentIndex] = React.useState(0);
    const ref = React.useRef(null);

    const Footer = () => {
        return (<View style={{ height: height * 0.2, paddingHorizontal: 20, justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center' }}>
                {slides.map((_, index) => (<View style={[stylesApp.indicator, currentIndex == index && { backgroundColor: white, width: 25 }]} key={index} ></View>))}
            </View>

            <View style={{ marginBottom: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={skip} style={[stylesApp.btn
                        , { backgroundColor: 'transparent', borderWidth: 1, borderColor: 'white', marginRight: 5 }]}>
                        <Text style={[stylesApp.appTextBold16, { color: 'white' }]}>SKIP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[stylesApp.btn, { marginLeft: 5 }]} onPress={goToNextSlide}>
                        <Text style={stylesApp.appTextBold16}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>)
    };
    const skip = () => {
        const lastSlideIndex = slides.length - 1;
        const offset = lastSlideIndex * width;
        ref?.current?.scrollToOffset({ offset });
        setCurrentIndex(nextSlide);

    }
    const updateCurrentSlideIndex = e => {
        const currentOffsetX = e.nativeEvent.contentOffset.x
        const index = Math.floor(currentOffsetX / width);
        setCurrentIndex(index);
    };

    const goToNextSlide = () => {
        const nextSlide = currentIndex+1;
        if (nextSlide != slides.length) {
            const offset = nextSlide * width;
            ref?.current?.scrollToOffset({ offset });
            setCurrentIndex(nextSlide);
        }

    }

    return (<SafeAreaView style={{ flex: 1, backgroundColor: black}} >
        <StatusBar backgroundColor={red} />
        <FlatList
            onScroll={updateCurrentSlideIndex}
            data={slides}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ height: height * 0.8 }}
            ref={ref}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
         

            // onScroll={Animated.event([{nativeEvent: {}}])}
            renderItem={({ item }) => <Slide item={item} />}

        />

        <Footer />
    </SafeAreaView>)
};
export default OnBoardingScreen;

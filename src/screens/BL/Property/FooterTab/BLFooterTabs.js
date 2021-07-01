import React, { Component, useState } from 'react';
import {
	Container,
	Header,
	Content,
	Footer,
	FooterTab,
	Button,
	Text,
} from 'native-base';
import {
	Image,
	StyleSheet,
	TouchableOpacity,
	View,
	Dimensions,
} from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
// import DealProgress from "../screens/BA/DealProgress/DealProgress";
// import Notification from "../screens/SA/Notification/Notification.jsx";
// import Settings from "../screens/BA/Settings/Settings";
// import PropertyView from "../screens/SA/Property/PropertyView.jsx";
import colors from '../../../../constants/colors';
import SLPropertyView from '../BLPropertyView';
import BLDealProgress from '../../Progress/BLProgressBar';

const { width } = Dimensions.get('window');

const BLFooterTabs = ({ navigation, property }) => {
	const [selected, setSelected] = useState('detail');
	let shown = <View />;

	if (selected === 'detail') {
		shown = <SLPropertyView navigation={navigation} property={property} />;
	}

	if (selected === 'progress') {
		shown = <BLDealProgress />;
	}

	if (selected === 'notif') {
		shown = <View style={{ flex: 1 }} />;
	}

	if (selected === 'setting') {
		shown = <View />;
	}

	return (
		<Container style={{ backgroundColor: colors.bgBrown }}>
			<>{shown}</>
			<Footer style={{ backgroundColor: '#fff' }}>
				<FooterTab
					style={{
						backgroundColor: colors.bgBrown,
						borderWidth: 0.5,
						borderColor: colors.white,
						elevation: 1,
					}}
				>
					<TouchableOpacity
						style={styles.btn}
						onPress={() => setSelected('detail')}
					>
						<FontAwesome name='search' color={colors.white} size={25} />
						<Text style={styles.titles}>Listing</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.btn}
						onPress={() => setSelected('progress')}
					>
						<Image
							source={require('../../../../assets/img/progress.png')}
							style={{ width: 30, height: 30 }}
						/>
						<Text style={styles.titles}>Deal Progress</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.btn}
						onPress={() => setSelected('notif')}
					>
						<FontAwesome name='bell' color={colors.white} size={25} />
						<Text style={styles.titles}>Notification</Text>
					</TouchableOpacity>
					{/* <TouchableOpacity
            style={styles.btn}
            onPress={() => setSelected("setting")}
          >
            <Feather name="settings" color={colors.white} size={25} />
            <Text style={styles.titles}>Settings</Text>
          </TouchableOpacity> */}
				</FooterTab>
			</Footer>
		</Container>
	);
};

export default BLFooterTabs;

const styles = StyleSheet.create({
	titles: {
		fontSize: 11,
		color: colors.white,
	},
	btn: { justifyContent: 'center', alignItems: 'center', width: width / 4 },
});

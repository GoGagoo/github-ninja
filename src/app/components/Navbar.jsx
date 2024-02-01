import { Box, Button, Flex, Heading, useDisclosure } from '../chakra.js'
import { Image } from '../chakra-next.js'
import { RepeatClockIcon } from '@chakra-ui/icons'
import HistoryModal from './HistoryModal'

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<Flex justifyContent={'space-between'} py={6} alignItems={'center'}>
			<Box position={'relative'} aspectRatio={5 / 3} minHeight={20}>
				<Image src={'/logo-icon.svg'} alt='' width={20} height={20} />
			</Box>
			<Box>
				<Heading as='h2' size='lg' color={'black'} fontWeight={'bold'}>
					GitHub Ninja
				</Heading>
				
			</Box>
			<Box>
				<Button size='md' colorScheme='whatsapp' onClick={onOpen} leftIcon={<RepeatClockIcon />}>
					Search History
				</Button>
			</Box>

			{isOpen && <HistoryModal isOpen={isOpen} onClose={onClose}  />}
		</Flex>
	)
}

export default Navbar

import { Box, Button, Flex, Heading } from '@/app/chakra'
import { Image } from '@/app/chakra-next'
import { RepeatClockIcon } from '@chakra-ui/icons'

const Navbar = () => {
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
				<Button size='md' colorScheme='whatsapp' leftIcon={<RepeatClockIcon />}>
					Search History
				</Button>
			</Box>
		</Flex>
	)
}

export default Navbar

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/admin', current: false },
  { 
    name: 'Consultations', 
    href: '/admin/consultations', 
    icon: ChatBubbleLeftRightIcon,
    current: false 
  },
  { 
    name: 'Newsletter', 
    href: '/admin/newsletter', 
    icon: EnvelopeIcon,
    current: false 
  },
  // ...other nav items
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Popover className="relative bg-white">
      <div>
        <div className="flex h-16 shrink-0 items-center justify-between">
          <div className="flex lg:min-w-0 lg:flex-1" />
          <div className="flex lg:min-w-0 lg:flex-1" />
          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center">
            <nav aria-label="Global" className="hidden space-x-8 lg:flex">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900',
                    'inline-block rounded-lg px-3 py-1.5 text-sm font-semibold'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <item.icon className="h-6 w-6 inline-block" aria-hidden="true" />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex lg:min-w-0 lg:flex-1 lg:justify-end">
            {/* ...other components... */}
          </div>
        </div>
      </div>
    </Popover>
  )
}
